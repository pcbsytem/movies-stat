import { Col, Icon, IconButton, FlexboxGrid, List } from "rsuite";

import { formatDate } from "../../services/helper";
import "./Favorite.css";

function FavoriteItem({ item, handleRemove }) {
  return (
    <List.Item className="favoriteItem">
      <FlexboxGrid align="middle">
        <FlexboxGrid.Item
          componentClass={Col}
          colspan={24}
          md={5}
          style={{ padding: 0 }}
        >
          <img
            src={`${process.env.REACT_APP_API_IMAGE}${item?.backdrop_path}`}
            alt={item?.title}
            width="100%"
          />
        </FlexboxGrid.Item>

        <FlexboxGrid.Item
          className="centerText"
          componentClass={Col}
          colspan={24}
          md={6}
        >
          <br />
          <h6>{item?.title}</h6>
          <br />
        </FlexboxGrid.Item>

        <FlexboxGrid.Item
          className="centerText"
          componentClass={Col}
          colspan={24}
          md={4}
        >
          <div>Relevância</div>
          <div>{`${item.vote_average * 10}% `}</div>
        </FlexboxGrid.Item>

        <FlexboxGrid.Item
          className="centerText"
          componentClass={Col}
          colspan={24}
          md={4}
        >
          <div>{formatDate(item?.release_date)}</div>
        </FlexboxGrid.Item>

        <FlexboxGrid.Item
          className="endText"
          componentClass={Col}
          colspan={24}
          md={4}
        >
          <IconButton
            size="md"
            appearance="subtle"
            icon={<Icon icon="trash2" />}
            onClick={() => handleRemove(item)}
            title="Clique para remover favorito"
          />
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </List.Item>
  );
}

export default FavoriteItem;
