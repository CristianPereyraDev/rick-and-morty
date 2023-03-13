const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

function getCharById(req, res) {
  const { id } = req.params;
  axios
    .get(`${URL}${id}`)
    .then((response) => {
      const character = { ...response.data };
      res.status(200).json(character);
    })
    .catch((error) => {
      res.status(500).json({ message: `Personaje con id ${id} no encontrado` });
    });
}

module.exports = getCharById;
