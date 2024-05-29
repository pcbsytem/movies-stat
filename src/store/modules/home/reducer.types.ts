import { MovieProps } from "../../../commons/typing"

interface DatesProps {
  maximum?: string
  minimum?: string
}

export interface InitialStateProps {
  dates: DatesProps
  page: number
  results: MovieProps[]
  total_pages: number,
  total_results: number
  empty?: boolean
}