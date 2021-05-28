import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon, FlexboxGrid, List } from "rsuite";
import { toast } from "react-toastify";

import { addFavorite } from "../../store/modules/card/action";
import FavoriteItem from "./FavoriteItem";
import "./Favorite.css";

function Favorite() {
  const dispatch = useDispatch();
  const { favorite = [] } = useSelector((state) => ({
    favorite: state.card.favorite,
  }));

  useEffect(() => {
    let favorite = [];
    if (localStorage.getItem("favorite") !== null) {
      favorite = [...JSON.parse(localStorage.getItem("favorite"))];
    }

    dispatch(addFavorite(favorite));
  }, [dispatch]);

  function handleRemove({ id }) {
    const newFavorite = favorite.filter((item) => item.id !== id);
    localStorage.setItem("favorite", JSON.stringify(newFavorite));
    dispatch(addFavorite(newFavorite));

    toast.success("Favorito removido com sucesso!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <>
      {favorite.length > 0 && (
        <List className="favoriteList" hover>
          {favorite.map((item, index) => (
            <FavoriteItem
              item={item}
              handleRemove={handleRemove}
              key={item.id}
            />
          ))}
        </List>
      )}

      {favorite.length === 0 && (
        <FlexboxGrid className="favoriteEmpty" justify="center" align="middle">
          <Icon icon="frown-o" size="5x" />
          <p>Nenhum favorito foi adicionado!</p>
        </FlexboxGrid>
      )}
    </>
  );
}

export default Favorite;
