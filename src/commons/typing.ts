export interface MovieProps {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number | null
  original_language: string
  original_title: string
  overview: string
  popularity: number | null
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number | null
  vote_count: number | null
}