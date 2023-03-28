import { Prisma } from "@prisma/client";
import Express from "express";
import prisma from "./lib/prisma/client";

const app = Express();

app.get("/planets", async (req, res) => {

  const planets = await prisma.planet.findMany();
  res.json(planets);
});

export default app;