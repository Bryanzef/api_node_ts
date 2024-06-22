import express from "express";

import "dotenv/config";

import "./shared/services/traductionYup";

import { router } from "./routes/routes";

const server = express();

server.use(express.json());

server.use(router);

export { server };
