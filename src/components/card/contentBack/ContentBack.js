import { useDispatch, useSelector } from "react-redux";
import { IconButton, Icon, FlexboxGrid } from "rsuite";
import { toast } from "react-toastify";

import { addFavorite } from "../../../store/modules/card/action";
import { formatDate } from "../../../services/helper";
import "../Card.css";

export default function ContentBack() {
  const dispatch = useDispatch();
  const { detail } = useSelector((state) => ({
    detail: state.card.detail,
  }));

  function handleAddFavorite() {
    let favorite = [];
    if (localStorage.getItem("favorite") !== null) {
      favorite = [...JSON.parse(localStorage.getItem("favorite"))];
    }

    const alreadyAdded = favorite.findIndex((item) => item.id === detail.id);

    if (alreadyAdded === -1) {
      favorite.push(detail);
      localStorage.setItem("favorite", JSON.stringify(favorite));
      dispatch(addFavorite(favorite));

      toast.success("Favorito adicionado com sucesso!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  return (
    <>
      <div className="contentBack">
        {detail?.backdrop_path ? (
          <img
            src={`${process.env.REACT_APP_API_IMAGE}${detail?.backdrop_path}`}
            alt={detail?.title}
          />
        ) : (
          <FlexboxGrid
            className="cardBackWithoutImage"
            justify="center"
            align="middle"
          >
            <Icon icon="file-image-o" size="lg" />
          </FlexboxGrid>
        )}

        <FlexboxGrid justify="center" align="middle">
          <b>{detail?.title || "Sem título"}</b>

          <p className="overview">{detail?.overview || "Sem sinopse"}</p>

          <div className="release">
            <b>Lançamento:</b> {formatDate(detail?.release_date)}
          </div>
        </FlexboxGrid>
        <IconButton
          classPrefix="cardFavoriteButton"
          icon={<Icon icon="heart" />}
          onClick={handleAddFavorite}
          color="red"
          circle
        />
      </div>
    </>
  );
}
