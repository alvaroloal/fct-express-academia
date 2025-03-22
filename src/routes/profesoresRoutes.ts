import express from 'express';
import profesoresController from '../controllers/profesoresController';
const router = express.Router();

router.get('/', profesoresController.consultar);
router.post('/', profesoresController.crear);

router.route("/:id")
    .get(profesoresController.consultarPorId)
    .put(profesoresController.actualizar)
    .delete(profesoresController.eliminar);
export default router;