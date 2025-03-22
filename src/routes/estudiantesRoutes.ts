import express from 'express';
import estudiantesController from '../controllers/estudiantesController';
const router = express.Router();

router.get('/', estudiantesController.consultar);
router.post('/', estudiantesController.crear);

router.route("/:id")
    .get(estudiantesController.consultarPorId)
    .put(estudiantesController.actualizar)
    .delete(estudiantesController.eliminar);
export default router;