import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FlexboxGrid, Icon } from "rsuite";

import { getUpcomingMovies } from "../../store/modules/home/action";

import Card from "../../components/card/Card";
import Pagination from "../../components/pagination/Pagination";

function HomeList() {
  const dispatch = useDispatch();
  const { movies = { results: [] } } = useSelector((state) => ({
    movies: state.home.movies
  }));

  useEffect(() => {
    dispatch(getUpcomingMovies());
  }, [dispatch]);

  function handlePagination(page) {
    dispatch(getUpcomingMovies(page));
  }

  return (
    <section style={{ textAlign: "center" }}>
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
    </section>
  );
}

export default HomeList;
