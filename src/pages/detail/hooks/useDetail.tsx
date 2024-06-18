import { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { closeDetail, openDetail } from '../../../store/modules/detail/reducer';
import { InitialStateProps } from '../../../store/modules/detail/reducer.types';
import { useCoreSelector } from '../../../commons/hooks/useCoreSelector';
import api from '../../../services/api';

export const useDetail = () => {
  const dispatch = useDispatch();
  const {
    detail: { showDetail, ...rest }
  } = useCoreSelector((state) => state);

  const handleDetailMovie = useCallback(async ({ id }: InitialStateProps) => {
    const params = {
      language: 'pt-BR'
    };

    try {
      const { data } = await api.get(`/movie/${id}`, { params });
      return data;
    } catch (error) {
      return [];
    }
  }, []);

  const handleSimilarMovies = useCallback(async () => {
    const params = {
      language: 'pt-BR',
      page: 1
    };

    try {
      const {
        data: { results }
      } = await api.get(`/movie/${rest.id}/similar`, { params });
      return results;
    } catch (error) {
      return [];
    }
  }, [rest]);

  const handleDetailClose = useCallback(() => {
    dispatch(closeDetail());
  }, [dispatch]);

  const handleDetailOpen = useCallback(
    async (movie: InitialStateProps) => {
      const result = await handleDetailMovie(movie);
      dispatch(openDetail({ ...result }));
    },
    [dispatch, handleDetailMovie]
  );

  return useMemo(
    () => ({
      detail: rest,
      showDetail,
      handleDetailClose,
      handleDetailOpen,
      handleSimilarMovies
    }),
    [handleDetailClose, handleDetailOpen, handleSimilarMovies, rest, showDetail]
  );
};
