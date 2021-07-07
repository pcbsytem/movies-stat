import { Route, BrowserRouter } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Favorite from "./pages/favorite/Favorite";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route component={Home} path="/" exact />
      <Route component={Favorite} path="/favoritos" />
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
