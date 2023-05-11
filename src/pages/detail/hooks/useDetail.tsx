import { useCallback, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { closeDetail, openDetail } from '../../../store/modules/detail/reducer'
import { InitialStateProps } from '../../../store/modules/detail/reducer.types'
import { useCoreSelector } from '../../../commons/hooks/useCoreSelector'
import api from '../../../services/api'
import { API_TOKEN } from '../../../services/api.constants'

export const useDetail = () => {
  const dispatch = useDispatch()
  const {
    detail: { showDetail, ...rest }
  } = useCoreSelector((state) => state)

  const handleDetailClose = useCallback(() => {
    dispatch(closeDetail())
  }, [dispatch])

  const handleDetailOpen = useCallback(
    (movie: InitialStateProps) => {
      dispatch(openDetail({ ...movie }))
    },
    [dispatch]
  )

  const handleSimilarMovies = useCallback(async () => {
    const params = {
      api_key: API_TOKEN,
      language: 'pt-BR',
      page: 1
    }

    try {
      const {
        data: { results }
      } = await api.get(`/movie/${rest.id}/similar`, { params })
      return results
    } catch (error) {
      console.error(error)
      return []
    }
  }, [rest])

  return useMemo(
    () => ({
      detail: rest,
      showDetail,
      handleDetailClose,
      handleDetailOpen,
      handleSimilarMovies
    }),
    [handleDetailClose, handleDetailOpen, handleSimilarMovies, rest, showDetail]
  )
}
