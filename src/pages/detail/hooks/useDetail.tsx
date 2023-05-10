import { useCallback, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { closeDetail, openDetail } from '../../../store/modules/detail/reducer'
import { InitialStateProps } from '../../../store/modules/detail/reducer.types'
import { useCoreSelector } from '../../../commons/hooks/useCoreSelector'

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

  return useMemo(
    () => ({ detail: rest, showDetail, handleDetailClose, handleDetailOpen }),
    [handleDetailClose, handleDetailOpen, rest, showDetail]
  )
}
