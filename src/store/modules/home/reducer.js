export default function home(state = [], action) {
  switch (action.type) {
    case "ADD_MOVIE_LIST": {
      return {
        ...state,
        movies: action.movies,
      };
    }
    default:
      return state;
  }
}
