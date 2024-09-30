import { Router } from "express";
import * as controller from '../controllers/proyectos.controller.js';

const route = Router()

route.get('/proyectos', controller.getProyectos);
route.post('/proyectos', controller.agregarProyecto);
route.put('/proyectos/:id', controller.reemplazarProyecto); 
route.patch('/proyectos/:id', controller.modificarProyecto);
route.delete('/proyectos/:id', controller.eliminarProyecto);

export default route;  