const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

async function getCharDetail(req, res) {
  const { id } = req.params;
  try {
    const response = await axios.get(`${URL}${id}`);
    const character = {
      id: response.data.id,
      image: response.data.image,
      name: response.data.name,
      gender: response.data.gender,
      species: response.data.species,
      status: response.data.status,
      origin: response.data.origin?.name,
    };
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json({ message: `Personaje con id ${id} no encontrado` });
  }
}

module.exports = getCharDetail;
