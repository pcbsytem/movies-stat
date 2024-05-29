import { useMemo, useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import api from '../../../services/api'
import { API_TOKEN } from '../../../services/api.constants'
import { addMovieList } from '../../../store/modules/home/reducer'
import { useCoreSelector } from '../../../commons/hooks/useCoreSelector'

export const useMovies = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const { home: movies } = useCoreSelector((state) => state)

  const getMoviesSearch = useCallback(async (page = 1, query = '') => {
    const params = query ? {
      api_key: API_TOKEN,
      language: 'pt-BR',
      query,
      page,
    } : {
      api_key: API_TOKEN,
      language: 'pt-BR',
      page,
    }
    setLoading(true)
    try {
      const { data } = await api.get('search/movie', { params })
      const result =
        data.results?.length > 0 ? data : { empty: true }
      setLoading(false)
      dispatch(addMovieList(result))
    } catch (error) {
      dispatch(addMovieList({
        empty: true,
        dates: {
          maximum: '',
          minimum: '',
        },
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0,
      }))
    }

  }, [dispatch])

  const getUpcomingMovies = useCallback(async (page?: number) => {
    const api_key = API_TOKEN
    const params = {
      api_key,
      language: 'pt-BR',
      page: page || 1,
    }
    setLoading(true)
    try {
      const { data } = await api.get('movie/upcoming', { params })
      const result =
        data.results?.length > 0 ? data : { empty: true }
      setLoading(false)
      dispatch(addMovieList(result))
    } catch (error) {
      dispatch(addMovieList({
        empty: true,
        dates: {
          maximum: '',
          minimum: '',
        },
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0,
      }))
    }
  }, [dispatch])


  const handleMoviePagination = useCallback(async (page?: number) => {
    await getUpcomingMovies(page)
  }, [getUpcomingMovies])

  const handleMovieSearch = useCallback(async (search: string) => {
    if (search) {
      await getMoviesSearch(1, search)
      return
    }

    getUpcomingMovies(1)
  }, [getMoviesSearch, getUpcomingMovies])

  return useMemo(() => ({
    loading,
    movies,
    handleMoviePagination,
    handleMovieSearch,
  }), [handleMoviePagination, handleMovieSearch, loading, movies])
}