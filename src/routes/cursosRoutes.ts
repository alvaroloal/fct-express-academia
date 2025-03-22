import express from 'express';
import cursosController from '../controllers/cursosController';
const router = express.Router();

router.get('/', cursosController.consultar);

router.post('/', cursosController.crear);
router.post('/registrar', cursosController.registrarEstudiante);

router.route("/:id")
    .get(cursosController.consultarPorId)
    .put(cursosController.actualizar)
    .delete(cursosController.eliminar)


export default router;