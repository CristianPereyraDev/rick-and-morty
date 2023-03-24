const { Favorite } = require("../DB_connection");

async function getFavorite(req, res) {
  try {
    const favorites = await Favorite.findAll();
    res.status(200).json(favorites);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = getFavorite;
