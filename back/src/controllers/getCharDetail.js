const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

const getCharDetail = (req, res) => {
  const params = req.params;
  axios
    .get(`${URL}${params.id}`)
    .then((response) => response.data)
    .then((data) => {
      const character = {
        id: data.id,
        image: data.image,
        name: data.name,
        gender: data.gender,
        species: data.species,
        status: data.status,
        origin: data.origin?.name,
      };
      res.status(200).json(character);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: `Personaje con id ${params.id} no encontrado` });
    });
};

module.exports = getCharDetail;
