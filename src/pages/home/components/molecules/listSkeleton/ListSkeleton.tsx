import { memo } from 'react';
import { FlexboxGrid } from 'rsuite';
import { Pagination } from '../../../../../commons/components';
import { useMovies } from '../../../hooks/useMovies';
import { CardSkeleton } from '../../index';
import './ListSkeleton.css';

const ListSkeletonComponent = () => {
  const { movies } = useMovies();
  return (
    <section>
      {movies.results?.length > 0 && (
        <FlexboxGrid className='homeList' justify='center'>
          {movies.results.map((item, index) => (
            <CardSkeleton key={`${item.id} - ${index}`} />
          ))}
        </FlexboxGrid>
      )}

      {movies.results?.length > 1 && (
        <Pagination
          maxButtons={5}
          currentPage={movies.page}
          totalCount={movies.total_pages}
          handlePagination={() => null}
        />
      )}
    </section>
  );
};

export const ListSkeleton = memo(ListSkeletonComponent);
