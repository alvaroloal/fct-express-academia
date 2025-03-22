import { Request, Response } from "express";

class ProfesoresController {
    constructor() { }

    consultar(req: Request,  res: Response) {
        try {
            res.send('Consultar profesores');

        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }

    consultarPorId(req: Request,  res: Response){
        const id = req.params.id;
        try {
            res.send('Consultar profesor por id');

        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }

    crear(req: Request,  res: Response) {
        try {
            res.send('Crear profesor');

        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }

    actualizar(req: Request,  res: Response) {
        const id = req.params.id;
        try {
            res.send('Actualizar profesor');

        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }

    eliminar(req: Request,  res: Response) {
        const id = req.params.id;
        try {
            res.send('Eliminar profesor');

        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }
}

export default new ProfesoresController();

