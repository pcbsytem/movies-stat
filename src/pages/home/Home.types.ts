import { MovieProps } from "../../commons/typing";

export interface CardProps {
  movie: MovieProps
  action?: (movie: MovieProps) => void
}