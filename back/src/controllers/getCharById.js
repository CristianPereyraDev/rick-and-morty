const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

async function getCharById(req, res) {
  const { id } = req.params;
  try {
    const response = await axios.get(URL + id);
    const character = { ...response.data };
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json({ message: `Personaje con id ${id} no encontrado` });
  }
}

module.exports = getCharById;
