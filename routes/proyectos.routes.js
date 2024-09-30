import express from 'express';
import * as proyectoController from '../controllers/proyectos.controller.js';

const router = express.Router(); 

router.get('/proyectos', proyectoController.getProyectos);
router.get('/proyectos/nuevo', proyectoController.nuevoProyecto);
router.post('/proyectos/nuevo', proyectoController.agregarProyecto);
router.get('/proyectos/ver/:id', proyectoController.getProyectoId);
router.get('/proyectos/modificar/:id', proyectoController.modificarProyectoForm);
router.post('/proyectos/modificar/:id', proyectoController.modificarProyecto);
router.get('/proyectos/eliminar/:id', proyectoController.eliminarProyecto);

router.get('/proyectos/:seccion', proyectoController.getProyectosPorSeccion); 

export default router;