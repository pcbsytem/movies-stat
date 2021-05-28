import { Route, BrowserRouter } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Favorite from "./pages/favorite/Favorite";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route component={Home} path="/" exact />
      <Route component={Favorite} path="/favoritos" />
    </BrowserRouter>
  );
};

export default Routes;
