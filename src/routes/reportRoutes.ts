import { Router } from "express";
import { getData } from "../data/dataProvider";

const router = Router();

router.get('/data', (req, res) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;

  const data = getData(page, limit);
  res.json(data);
});

export default router;
