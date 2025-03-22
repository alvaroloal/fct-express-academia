import { Request, Response } from "express";

class EstudiantesController {
    constructor() { }

    consultar(req: Request,  res: Response) {
        try {
            res.send('Consultar estudiantes');

        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }

    consultarPorId(req: Request,  res: Response){
        const id = req.params.id;
        try {
            res.send('Consultar estudiante por id');

        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }

    crear(req: Request,  res: Response) {
        try {
            res.send('Crear estudiante');

        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }

    actualizar(req: Request,  res: Response) {
        const id = req.params.id;
        try {
            res.send('Actualizar estudiante');

        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }

    eliminar(req: Request,  res: Response) {
        const id = req.params.id;
        try {
            res.send('Eliminar estudiante');

        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }
}

export default  new EstudiantesController();

