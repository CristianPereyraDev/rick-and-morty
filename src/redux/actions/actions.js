import { ADD_FAVORITE, DELETE_FAVORITE } from "./types";

export function addFavorite(character) {
  return { type: ADD_FAVORITE, payload: character };
}

export function deleteFavorite(idCharacter) {
  return { type: DELETE_FAVORITE, payload: idCharacter };
}
