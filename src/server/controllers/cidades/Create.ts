import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

// Definindo a interface para a cidade
interface ICidade {
    nome: string;
}

// Esquema de validação usando yup
const bodyValidation: yup.ObjectSchema<ICidade> = yup
    .object({
        nome: yup.string().required().min(3),
    })
    .defined();

// Função para criar uma cidade
export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
    let validateData: ICidade | undefined = undefined;
    try {
        validateData = await bodyValidation.validate(req.body, { abortEarly: false });
    } catch (error) {
        const yupError = error as yup.ValidationError;

        return res.status(StatusCodes.BAD_REQUEST).json({
            errors: {
                default: yupError.message,
            },
        });
    }

    console.log(validateData);

    // Resposta de sucesso
    return res.status(StatusCodes.CREATED).json({ message: "Create" });
};
