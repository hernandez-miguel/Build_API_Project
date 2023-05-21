import express from "express";
// TODO: import router from stocks.route
import stocksRouter from './stocks.route'

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("working");
});

// TODO: use the imported router to handle all routes matching "/stocks"
router.use('/stocks', stocksRouter);

export default router;
