import { MovieProps } from "../../commons/typing"

export interface FavoriteItemProps {
  item: MovieProps
}

export interface handleExistInFavoriteProps {
  id: number | null
}

export interface HandleFavoriteRemoveProps {
  id: number
}