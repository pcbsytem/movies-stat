import { useCallback, useEffect, useMemo } from "react"
import { toast } from "react-toastify"
import { useDispatch } from "react-redux"
import { FAVORITE_LOCAL_STORE_KEY, FAVORITE_TOAST_CONFIG, FAVORITE_TOAST_TEXT } from "../Favorite.constants"
import { addFavoriteMovies } from "../../../store/modules/favorite/reducer"
import { useCoreSelector } from "../../../commons/hooks/useCoreSelector"
import { MovieProps } from "../../../commons/typing"

interface HandleFavoriteRemoveProps {
  id: number
}

export const useFavorite = () => {
  const dispatch = useDispatch()
  const { favorite = [] } = useCoreSelector((state) => state)

  useEffect(() => {
    const handleFavoriteLoad = () => {
      const favoriteStoredValue = localStorage.getItem(FAVORITE_LOCAL_STORE_KEY)
      dispatch(addFavoriteMovies(favoriteStoredValue !== null ? [...JSON.parse(favoriteStoredValue)] : []))
    }

    handleFavoriteLoad()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  const handleExistInFavorite = useCallback(({ id }: { id: number | null }) =>
    favorite.findIndex((item: MovieProps) => item.id === id) !== -1
    , [favorite])


  const handleFavoriteRemove = useCallback(({ id }: HandleFavoriteRemoveProps) => {
    const newFavorite = favorite.filter((item: MovieProps) => item.id !== id)
    localStorage.setItem(FAVORITE_LOCAL_STORE_KEY, JSON.stringify(newFavorite))
    dispatch(addFavoriteMovies(newFavorite))

    toast.success(FAVORITE_TOAST_TEXT.REMOVED, {
      ...FAVORITE_TOAST_CONFIG
    })
  }, [dispatch, favorite])

  const handleFavoriteAdd = useCallback((movie: MovieProps) => {
    if (movie.id === null) {
      return
    }
    const alreadyAdded = favorite.findIndex((item: MovieProps) => item.id === movie.id)

    if (alreadyAdded === -1) {
      const newFavorite = [...favorite, movie]
      localStorage.setItem('favorite', JSON.stringify(newFavorite))
      dispatch(addFavoriteMovies(newFavorite))

      toast.success(FAVORITE_TOAST_TEXT.ADDED, {
        ...FAVORITE_TOAST_CONFIG
      })
    }
  }, [dispatch, favorite])

  return useMemo(() => ({
    favorite,
    handleExistInFavorite,
    handleFavoriteRemove,
    handleFavoriteAdd
  }), [
    favorite,
    handleExistInFavorite,
    handleFavoriteAdd,
    handleFavoriteRemove
  ])
}