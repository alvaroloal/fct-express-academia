import { Request, Response } from "express";

class CursosController {
    constructor() { }

    consultar(req: Request,  res: Response) {
        try {
            res.send('Consultar cursos');

        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }

    consultarPorId(req: Request,  res: Response){
        const id = req.params.id;
        try {
            res.send('Consultar curso por id');

        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }

    crear(req: Request,  res: Response) {
        try {
            res.send('Crear curso');

        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }

    actualizar(req: Request,  res: Response) {
        const id = req.params.id;
        try {
            res.send('Actualizar curso');

        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }

    eliminar(req: Request,  res: Response) {
        const id = req.params.id;
        try {
            res.send('Eliminar curso');

        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }

    registrarEstudiante(req: Request,  res: Response) {
        const id = req.params.id;
        try {
            res.send('Registrar estudiante en curso');

        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }
}

export default new CursosController();

