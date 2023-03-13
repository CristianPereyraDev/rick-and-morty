let { favs } = require("../utils/favs");

function postFav(req, res) {
  const character = req.body;
  // Suponiendo que la info es válida
  if (!favs.find((fav) => fav.id === character.id)) {
    favs.push(character);
    return res
      .status(200)
      .json({ message: "Personaje agregado a favoritos correctamente." });
  }
  res.status(500).json({ error: "El personaje ya se encuentra en favoritos." });
}

function getFav(req, res) {
  res.status(200).json(favs);
}

function deleteFav(req, res) {
  const id = req.params.id;
  const filter = favs.filter((fav) => fav.id !== id);
  if (filter.length < favs.length) {
    favs = filter;
    return res.status(200).json({ message: "Favorite succeful removed." });
  }
  res.status(400).json({ error: "Favorite id not found" });
}

module.exports = { postFav, getFav, deleteFav };
