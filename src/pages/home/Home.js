import { lazy, Suspense } from "react";

import Banner from "../../components/banner/Banner";
import Loading from "../../components/loading/Loading";
import ScrollArrow from "../../components/scrollArrow/ScrollArrow";
import "./Home.css";

const HomeList = lazy(() => import("./HomeList"));

function Home(props) {
  return (
    <>
      <Banner
        title="Encontre os melhores filmes e seriados aqui"
        subTitle="O mais completo guia de filmes e séries"
      />
      <ScrollArrow />
      <Suspense fallback={<Loading />}>
        <HomeList />
      </Suspense>
    </>
  );
}

export default Home;
