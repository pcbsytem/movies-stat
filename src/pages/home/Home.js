import { lazy, Suspense } from "react";

import Logo from "../../components/logo/Logo";
import Loading from "../../components/loading/Loading";
import "./Home.css";

const HomeList = lazy(() => import("./HomeList"));

function Home(props) {
  return (
    <>
      <div className="homeBanner">
        <Logo height="90px" />
        <br />
        <h1>Encontre os melhores filmes aqui</h1>
        <br />
        <p>O melhor catalógo de filmes da Amera Latina</p>
      </div>
      <Suspense fallback={<Loading />}>
        <HomeList />
      </Suspense>
    </>
  );
}

export default Home;
