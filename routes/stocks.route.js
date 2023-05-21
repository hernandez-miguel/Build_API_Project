import express from "express";
import stocks from "../controllers/stocks.controller";

const router = express.Router();

router.get("/:id?", async (req, res, next) => {
  let { id } = req.params;
  let data;

  if (id) {
    data = await stocks.findOne(id);
  } else {
    data = await stocks.findAll();
  }

  res.json(data);
});

router.post("/", async (req, res, next) => {
  let employeeDTO = req.body;
  let data = await stocks.addOne(employeeDTO);
  res.json(data);
});

router.put("/:id", async (req, res, next) => {
  let { id } = req.params;
  let employeeDTO = req.body;
  let data = await stocks.updateOne(id, employeeDTO);
  res.json(data);
});

router.delete("/:id", async (req, res, next) => {
  let { id } = req.params;
  let data = await stocks.removeOne(id);
  res.json(data);
});

export default router;