const axios = require("axios");
const { Character } = require("../DB_connection");

async function getApiData() {
  try {
    let allCharacters = [];
    for (let page = 1; page <= 5; page++) {
      let apiData = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const pageCharacters = apiData.data.results.map((char) => {
        return {
          id: char.id,
          name: char.name,
          status: char.status,
          species: char.species,
          gender: char.gender,
          origin: char.origin?.name,
          image: char.image,
        };
      });
      allCharacters = [...allCharacters, ...pageCharacters];
    }
    return allCharacters;
  } catch (error) {
    return { msg: error.message };
  }
}

async function saveApiData() {
  try {
    const allCharacters = await getApiData();
    console.log(allCharacters.length);
    for (let i = 0; i < allCharacters.length; i++) {
      console.log(i);
      const [char, created] = await Character.findOrCreate({
        where: { id: allCharacters[i].id },
        defaults: { ...allCharacters[i] },
      });
    }
    return allCharacters;
  } catch (error) {
    return { msg: error.message };
  }
}

module.exports = saveApiData;
