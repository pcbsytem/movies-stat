import { memo } from 'react'
import { FlexboxGrid } from 'rsuite'
import { Pagination } from '../../../../../commons/components'
import { useMovies } from '../../../hooks/useMovies'
import { CardSqueleton } from '../../index'
import './ListSqueleton.css'

const ListSqueletonComponent = () => {
  const { movies } = useMovies()
  return (
    <section style={{ textAlign: 'center', width: '100%' }}>
      {movies.results?.length > 0 && (
        <>
          <Pagination
            maxButtons={5}
            currentPage={movies.page}
            totalCount={movies.total_pages}
            handlePagination={() => null}
          />
          <FlexboxGrid className="homeList" justify="center">
            {movies.results.map((item, index) => (
              <CardSqueleton key={index} />
            ))}
          </FlexboxGrid>
          <Pagination
            maxButtons={5}
            currentPage={movies.page}
            totalCount={movies.total_pages}
            handlePagination={() => null}
          />
        </>
      )}
    </section>
  )
}

export const ListSqueleton = memo(ListSqueletonComponent)
