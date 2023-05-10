import { memo } from 'react'
import { FlexboxGrid } from 'rsuite'
import { Pagination } from '../../../../../commons/components'
import { Card } from '../../index'
import { useMovies } from '../../../hooks/useMovies'
import { MovieProps } from '../../../../../commons/typing'
import { EmptyState } from '../../../../../commons/components/organisms/emptyState/EmptyState'

const HomeListComponent = () => {
  const { movies, handleMoviePagination } = useMovies()

  return (
    <>
      {movies.results?.length > 0 && (
        <>
          <Pagination
            maxButtons={5}
            currentPage={movies.page}
            totalCount={movies.total_pages}
            handlePagination={handleMoviePagination}
          />
          <FlexboxGrid className="homeList" justify="center">
            {movies.results.map((movie: MovieProps, index: number) => (
              <Card movie={movie} key={index} />
            ))}
          </FlexboxGrid>
          <Pagination
            maxButtons={5}
            currentPage={movies.page}
            totalCount={movies.total_pages}
            handlePagination={handleMoviePagination}
          />
        </>
      )}

      {movies?.empty && <EmptyState />}
    </>
  )
}

export const HomeList = memo(HomeListComponent)
export default HomeList
