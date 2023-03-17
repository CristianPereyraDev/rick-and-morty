let { favs } = require("../utils/favs");

function deleteFavorite(req, res) {
  const id = req.params.id;
  const filter = favs.filter((fav) => fav.id !== Number(id));
  if (filter.length < favs.length) {
    favs = filter;
    return res
      .status(200)
      .json({ message: "Favorite succeful removed.", favs: favs });
  }
  res.status(400).json({ error: "Favorite id not found" });
}

module.exports = deleteFavorite;
