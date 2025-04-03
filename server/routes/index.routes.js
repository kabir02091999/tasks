import { Router } from "express";
import {pool} from "../db.js";

const router = Router();

router.get("/ping", async (req, res) => {
  res.json({ message: "Welcome to the API" });
  const consulta = await pool.query("SELECT 1 + 1 as result");
  console.log(consulta );
});

export default router;