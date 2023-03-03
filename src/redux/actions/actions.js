import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./types";

export function addFavorite(character) {
  return { type: ADD_FAVORITE, payload: character };
}

export function deleteFavorite(idCharacter) {
  return { type: DELETE_FAVORITE, payload: idCharacter };
}

export function filterCards(gender) {
  return { type: FILTER, payload: gender };
}

export function orderCards(order) {
  return { type: ORDER, payload: order };
}
