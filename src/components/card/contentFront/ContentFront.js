import { Icon, FlexboxGrid } from "rsuite";
import "../Card.css";

export default function ContentFront({ movie }) {
  return (
    <div className="contentFront">
      {movie?.poster_path ? (
        <img
          src={`${process.env.REACT_APP_API_IMAGE}${movie?.poster_path}`}
          alt={movie?.title}
        />
      ) : (
        <FlexboxGrid
          className="cardWithoutImage"
          justify="center"
          align="middle"
        >
          <Icon icon="file-image-o" size="lg" />
        </FlexboxGrid>
      )}
    </div>
  );
}
