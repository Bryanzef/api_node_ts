import { StatusCodes } from "http-status-codes";
import { Router } from "express";
import { CidadesController } from "./../controllers";

const router = Router();

router.get("/", (req, res) => {
    console.log(req.body);

    return res.send("Running");
});

router.post("/cidades", CidadesController.create);

export { router };
