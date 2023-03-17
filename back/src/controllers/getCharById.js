const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

async function getCharById(req, res) {
  const { id } = req.params;
  try {
    const response = await axios.get(URL + id);
    const character = {
      id: response.data.id,
      name: response.data.name,
      species: response.data.species,
      gender: response.data.gender,
      image: response.data.image,
    };
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json({ message: `Personaje con id ${id} no encontrado` });
  }
}

module.exports = getCharById;
