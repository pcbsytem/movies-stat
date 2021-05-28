import api from "../../../services/api";

export function addMovieList(movies) {
  return {
    type: "ADD_MOVIE_LIST",
    movies,
  };
}

export function getUpcomingMovies(page = 1, query = "rogai") {
  const api_key = process.env.REACT_APP_TOKEN;
  const params = {
    api_key,
    language: "pt-BR",
    page,
  };

  return (dispatch) => {
    api
      .get("movie/upcoming", {
        params,
      })
      .then((response) => {
        const result =
          response.data.results?.length > 0 ? response.data : { empty: true };
        dispatch(addMovieList(result));
      })
      .catch((error) => console.log(error));
  };
}

export function getMoviesSearch(page = 1, query = "") {
  const api_key = process.env.REACT_APP_TOKEN;
  const params = {
    api_key,
    language: "pt-BR",
    query,
    page,
  };

  if (!query) delete params.query;

  return (dispatch) => {
    api
      .get("search/movie", {
        params,
      })
      .then((response) => {
        const result =
          response.data.results?.length > 0 ? response.data : { empty: true };
        dispatch(addMovieList(result));
      })
      .catch((error) => console.log(error));
  };
}
