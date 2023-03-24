const { Favorite } = require("../DB_connection");
const Character = require("../models/Character");

async function postFavorite(req, res) {
  const character = req.body;
  try {
    console.log("fav:", character);
    const [favorite, created] = await Favorite.findOrCreate({
      where: { id: character.id },
      defaults: {
        id: Number(character.id),
        name: character.name,
        status: character.status,
        species: character.species,
        gender: character.gender,
        origin: character.origin,
        image: character.image,
      },
    });
    res.status(200).json({
      message: "Personaje agregado a favoritos correctamente.",
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = postFavorite;
