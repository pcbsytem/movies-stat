import { useDispatch } from "react-redux";
import { FlexboxGrid, Icon, IconButton, Modal } from "rsuite";
import { toast } from "react-toastify";

import { addFavorite } from "../../store/modules/card/action";
import { formatDate } from "../../services/helper";

function DetailModal({ detail, showModal, setShowModal }) {
  const dispatch = useDispatch();

  function handleClose() {
    setShowModal(false);
  }

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
    <Modal
      size="md"
      show={showModal}
      onHide={handleClose}
      style={{ width: "100%", height: "800px" }}
    >
      <Modal.Header>
        <Modal.Title>{detail?.title || "Sem título"}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ maxHeight: "600px" }}>
        {detail?.backdrop_path ? (
          <img
            src={`${process.env.REACT_APP_API_IMAGE}${detail?.backdrop_path}`}
            alt={detail?.title}
            style={{ width: "100%" }}
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

        <br />
        <br />

        <div style={{ textAlign: "justify" }}>
          {detail?.overview || "Sem sinopse"}
        </div>

        <br />

        <div className="release">
          <b>Lançamento:</b> {formatDate(detail?.release_date)}
        </div>

        <IconButton
          classPrefix="cardFavoriteButton"
          icon={<Icon icon="heart" />}
          onClick={handleAddFavorite}
          color="red"
          circle
        />
      </Modal.Body>
    </Modal>
  );
}

export default DetailModal;
