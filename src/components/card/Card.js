import { useDispatch } from "react-redux";
import { Col, FlexboxGrid } from "rsuite";

import { addMovieDetail } from "../../store/modules/card/action";
import ContentBack from "./contentBack/ContentBack";
import ContentFront from "./contentFront/ContentFront";
import "./Card.css";

function Card({ movie }) {
  const dispatch = useDispatch();

  return (
    <div className="card">
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
  );
}

export default Card;
