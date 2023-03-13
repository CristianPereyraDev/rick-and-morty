const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
  const params = req.params;
  axios
    .get(`${URL}${params.id}`)
    .then((response) => response.data)
    .then((data) => {
      const character = {
        id: data.id,
        name: data.name,
        image: data.image,
        gender: data.gender,
        species: data.species,
      };
      res.status(200).json(character);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: `Personaje con id ${params.id} no encontrado` });
    });
};

module.exports = getCharById;
