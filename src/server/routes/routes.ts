import { StatusCodes } from "http-status-codes";
import { Router } from "express";

const router = Router();

router.post("/teste", (req, res) => {
    console.log(req.body);

    return res.status(StatusCodes.ACCEPTED).json(req.body);
});

export { router };
