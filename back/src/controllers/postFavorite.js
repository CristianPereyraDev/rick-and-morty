let { favs } = require("../utils/favs");

function postFavorite(req, res) {
  const character = req.body;
  // Suponiendo que la info es válida
  if (!favs.find((fav) => fav.id === Number(character.id))) {
    favs.push(character);
    res.status(200).json({
      message: "Personaje agregado a favoritos correctamente.",
      favs: favs,
    });
  } else {
    res
      .status(500)
      .json({ error: "El personaje ya se encuentra en favoritos." });
  }
}

module.exports = postFavorite;
