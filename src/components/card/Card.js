import { useState } from "react";
import { useDispatch } from "react-redux";
import { Col, FlexboxGrid } from "rsuite";

import { addMovieDetail } from "../../store/modules/card/action";
import ContentBack from "./contentBack/ContentBack";
import ContentFront from "./contentFront/ContentFront";
import DetailModal from "../../components/detailModal/DetailModal";
import "./Card.css";

function Card({ movie }) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <DetailModal
        detail={movie}
        showModal={showModal}
        setShowModal={setShowModal}
      />

      <div className="card" onTouchEnd={() => setShowModal(true)}>
        <FlexboxGrid.Item
          className="cardInner"
          onMouseEnter={() => dispatch(addMovieDetail(movie))}
          onTouchEnd={() => dispatch(addMovieDetail(movie))}
          componentClass={Col}
          colspan={24}
          md={5}
        >
          <ContentFront movie={movie} />
          <ContentBack />
        </FlexboxGrid.Item>
      </div>
    </>
  );
}

export default Card;
