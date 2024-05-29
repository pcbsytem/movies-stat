import { ToastPosition } from "react-toastify";

export const FAVORITE_TEXT = {
  ICON_TITLE: 'Clique para remover favorito',
  VOTE_AVERAGE_TITLE: 'Relevância'
}
export const FAVORITE_LOCAL_STORE_KEY = 'favorite'
export const FAVORITE_TOAST_TEXT = {
  REMOVED: 'Favorito removido com sucesso!',
  ADDED: 'Favorito adicionado com sucesso!',
  WITHOUT_FAVORITE: 'Nenhum favorito foi adicionado!'
}

export const FAVORITE_TOAST_CONFIG = {
  position: 'top-right' as ToastPosition | undefined,
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined
}