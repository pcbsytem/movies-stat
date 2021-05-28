export default function card(state = [], action) {
  switch (action.type) {
    case "ADD_MOVIE_DETAIL": {
      return {
        ...state,
        detail: action.detail,
      };
    }
    case "ADD_FAVORITE_MOVIES": {
      return {
        ...state,
        favorite: action.favorite,
      };
    }
    default:
      return state;
  }
}
