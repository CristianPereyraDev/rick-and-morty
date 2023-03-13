import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./types";
import axios from "axios";

// Action with asynchronous code.
export function addFavorite(character) {
  return function (dispatch) {
    axios
      .post("http://localhost:3001/rickandmorty/fav", character)
      .then((value) => value.data)
      .then((value) => {
        console.log(value);
        dispatch({ type: ADD_FAVORITE, payload: character });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
// Action with asynchronous code.
export function deleteFavorite(idCharacter) {
  return function (dispatch) {
    axios
      .delete(
        "http://localhost:3001/rickandmorty/fav/" + idCharacter,
        idCharacter
      )
      .then((value) => value.data)
      .then((value) => {
        console.log(value);
        dispatch({ type: DELETE_FAVORITE, payload: idCharacter });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function filterCards(gender) {
  return { type: FILTER, payload: gender };
}

export function orderCards(order) {
  return { type: ORDER, payload: order };
}
