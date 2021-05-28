export function addMovieDetail(detail) {
  return {
    type: "ADD_MOVIE_DETAIL",
    detail,
  };
}

export function addFavorite(favorite) {
  return {
    type: "ADD_FAVORITE_MOVIES",
    favorite,
  };
}
