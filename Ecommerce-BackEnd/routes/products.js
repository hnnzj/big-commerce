const { Router } = require("express");
const { Inmuebles } = require("../models/inmuebles");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const inmuebles = await Inmuebles.findAll();
    res.status(200).json({
      ok: true,
      info: inmuebles,
    });
  } catch (err) {
    res.send({
      ok: false,
      error: err,
    });
  }
});

router.post("/crearInmueble", async (req, res) => {
  try {
    const { name, rating, price, description, categoria, imagen } = req.body;
    await Inmuebles.create({
      name,
      rating,
      categoria,
      price,
      imagen,
      description,
    });
    res.status(200).json({
      ok: true,
      info: "Created Succesfully",
    });
  } catch (err) {
    res.send({
      ok: false,
      error: err,
    });
  }
});

router.delete("/eliminarInmueble", async (req, res) => {
  try {
    const inmueble = req.query;
    await Inmuebles.destroy({ where: { id: inmueble.id } });
    res.status(200).json({
      ok: true,
      info: "Succesfully deleted",
    });
  } catch (err) {
    res.json({
      ok: false,
      error: err,
    });
  }
});

module.exports = router;
