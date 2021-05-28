import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FlexboxGrid, Icon } from "rsuite";

import {
  getMoviesSearch,
  getUpcomingMovies,
} from "../../store/modules/home/action";

import Card from "../../components/card/Card";
import Pagination from "../../components/pagination/Pagination";
import SearchInput from "../../components/searchInput/SearchInput";

function HomeList() {
  const dispatch = useDispatch();
  const { movies = { results: [] } } = useSelector((state) => ({
    movies: state.home.movies,
  }));

  useEffect(() => {
    dispatch(getUpcomingMovies());
  }, [dispatch]);

  function handlePagination(page) {
    dispatch(getUpcomingMovies(page));
  }

  function handleSearch(search) {
    if (search) {
      return dispatch(getMoviesSearch(1, search));
    }

    dispatch(getUpcomingMovies(1));
  }

  return (
    <>
      <SearchInput
        size="lg"
        width="771px"
        placeholder="Buscar..."
        action={handleSearch}
      />

      {movies.results?.length > 0 && (
        <>
          <Pagination
            maxButtons={5}
            currentPage={movies.page}
            totalCount={movies.total_pages}
            handlePagination={handlePagination}
          />
          <FlexboxGrid className="homeList" justify="center">
            {movies.results.map((movie, index) => (
              <Card movie={movie} key={index} />
            ))}
          </FlexboxGrid>
          <Pagination
            maxButtons={5}
            currentPage={movies.page}
            totalCount={movies.total_pages}
            handlePagination={handlePagination}
          />
        </>
      )}

      {movies?.empty && (
        <FlexboxGrid className="homeListEmpty" justify="center" align="middle">
          <Icon icon="frown-o" size="5x" />
          <p>Nenhum filme foi encontrado!</p>
        </FlexboxGrid>
      )}
    </>
  );
}

export default HomeList;
