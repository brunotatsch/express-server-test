import "reflect-metadata";

import express from "express";
import "express-async-errors";

import { router } from "./routes";

const app = express();

app.use(express.json())
app.use(router)

export { app };
