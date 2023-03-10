import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "../actions/types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

// Reducers can't contains side effects (api calls, read files, etc).
function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_FAVORITE: {
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
        allCharacters: [...state.allCharacters, payload],
      };
    }

    case DELETE_FAVORITE: {
      const listFiltered = state.myFavorites.filter(
        (char) => char.id !== payload
      );
      return { ...state, myFavorites: listFiltered };
    }

    case FILTER: {
      const { allCharacters } = state;
      const listFiltered = allCharacters.filter(
        (char) => char.gender === payload
      );
      return { ...state, myFavorites: listFiltered };
    }

    case ORDER: {
      const unorderedList = [...state.allCharacters];
      let orderedList = [];
      if (payload === "Ascendente")
        orderedList = unorderedList.sort((a, b) => a.id - b.id);
      else orderedList = unorderedList.sort((a, b) => b.id - a.id);
      return { ...state, myFavorites: orderedList };
    }

    default:
      return { ...state };
  }
}

export default rootReducer;
