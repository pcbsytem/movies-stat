import { lazy, Suspense, useEffect } from 'react';
import { Container, Content } from 'rsuite';
import { Banner, ScrollArrow, SearchInput } from '../../commons/components';
import { HOME_BANNER_TEXT } from './Home.constants';
import { Detail } from '../detail';
import { useMovies } from './hooks/useMovies';
import { ListSkeleton } from './components';
import './Home.css';

const HomeList = lazy(() => import('./components/organisms/homeList/HomeList'));

export function Home() {
  const { loading, handleMoviePagination, handleMovieSearch } = useMovies();

  useEffect(() => {
    handleMoviePagination();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Banner
        title={HOME_BANNER_TEXT.TITLE}
        subTitle={HOME_BANNER_TEXT.SUBTITLE}
      >
        <SearchInput
          size='lg'
          placeholder='Buscar...'
          alt='search input'
          action={handleMovieSearch}
        />
      </Banner>
      <Content>
        <ScrollArrow />

        <Suspense fallback={<ListSkeleton />}>
          {loading ? <ListSkeleton /> : <HomeList />}
        </Suspense>

        <Detail />
      </Content>
    </Container>
  );
}
