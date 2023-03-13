const { Router } = require("express");
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");
const { postFav, getFav, deleteFav } = require("../controllers/favorites");

const router = Router();

router.get("/onsearch/:id", getCharById);
router.get("/detail/:id", getCharDetail);
// Fav routes (manipulan el arreglo fav, que simula una base de datos)
router.post("/fav", postFav);
router.get("/fav", getFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
