const { Router } = require("express");
const {
  getCharById,
  getCharDetail,
  postFavorite,
  getFavorites,
  deleteFavorite,
} = require("../controllers");

// Router middleware
const router = Router();

router.get("/onsearch/:id", getCharById);
router.get("/detail/:id", getCharDetail);
// Favorites routes (manipulan el arreglo fav, que simula una base de datos)
router.post("/fav", postFavorite);
router.get("/fav", getFavorites);
router.delete("/fav/:id", deleteFavorite);

module.exports = router;
