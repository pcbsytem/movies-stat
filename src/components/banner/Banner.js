import { useDispatch } from "react-redux";

import {
  getMoviesSearch,
  getUpcomingMovies
} from "../../store/modules/home/action";
import SearchInput from "../../components/searchInput/SearchInput";
import Logo from "../logo/Logo";
import "./Banner.css";

function Banner({ title, subTitle }) {
  const dispatch = useDispatch();

  function handleSearch(search) {
    if (search) {
      return dispatch(getMoviesSearch(1, search));
    }

    dispatch(getUpcomingMovies(1));
  }

  return (
    <header className="banner">
      <div className="bannerLogo">
        <Logo height="90px" />
      </div>

      <br />
      <h1>{title}</h1>
      <br />
      <p className="bannerSubTitle">{subTitle}</p>

      <SearchInput
        size="lg"
        width="771px"
        placeholder="Buscar..."
        action={handleSearch}
      />
    </header>
  );
}

export default Banner;
