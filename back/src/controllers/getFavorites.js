let { favs } = require("../utils/favs");

function getFavorite(req, res) {
  res.status(200).json(favs);
}

module.exports = getFavorite;
