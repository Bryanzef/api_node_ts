import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

// Definindo a interface para a cidade
interface ICidade {
    nome: string;
    estado: string;
}

// Esquema de validação usando yup
const bodyValidation: yup.ObjectSchema<ICidade> = yup
    .object()
    .shape({
        nome: yup.string().required().min(3),
        estado: yup.string().required().min(3),
    })
    .defined();

// Função para criar uma cidade
export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
    let validateData: ICidade | undefined = undefined;
    try {
        validateData = await bodyValidation.validate(req.body, { abortEarly: false });
    } catch (err) {
        const yupError = err as yup.ValidationError;
        const errors: Record<string, string> = {};

        yupError.inner.forEach(error => {
            if (error.path === undefined) return;
            errors[error.path] = error.message;
        });

        return res.status(StatusCodes.BAD_REQUEST).json({ errors });
    }

    console.log(validateData);
};
