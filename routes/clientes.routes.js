import express from 'express';
import * as clienteController from '../controllers/clientes.controller.js';

const router = express.Router();

router.get('/clientes', clienteController.obtenerClientes);
router.get('/clientes/nuevo', clienteController.nuevoCliente);
router.post('/clientes/nuevo', clienteController.agregarCliente);
router.get('/clientes/:id/proyectos', clienteController.obtenerProyectosPorCliente);
router.get('/clientes/eliminar/:id', clienteController.eliminarCliente);

export default router;    