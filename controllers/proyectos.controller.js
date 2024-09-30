import * as proyectoService from "../services/proyectos.service.js";
import * as clienteService from "../services/clientes.service.js";
import * as proyectoView from "../views/proyectos.view.js";

const getProyectos = async (req, res) => {
  try {
    const proyectos = await proyectoService.getProyectos();
    res.send(proyectoView.crearPagina("Listado de proyectos", proyectoView.crearListadoProyectos(proyectos)));
  } catch (err) {
    res.send(proyectoView.crearPagina("Error al obtener proyectos", `<p>${err}</p>`));
  }
};

export const getProyectosPorSeccion = async (req, res) => {
  const seccion = req.params.seccion;

  try {
    const proyectos = await proyectoService.obtenerProyectosPorSeccion(seccion);

    if (proyectos.length === 0) {
      return res.send(proyectoView.crearPagina("Sección Vacía", `<h1>No hay proyectos en la sección ${seccion}</h1>`));
    }

    const contenido = proyectoView.crearListadoProyectosPorSeccion(proyectos, seccion);
    res.send(proyectoView.crearPagina(`Proyectos en ${seccion}`, contenido));
  } catch (error) {
    console.error("Error al cargar los proyectos:", error);
    res.send(proyectoView.crearPagina("Error", `<p>Error al cargar los proyectos: ${error.message}</p>`));
  }
};

const getProyectoId = async (req, res) => {
  const idProyecto = req.params.id;

  try {
    const proyecto = await proyectoService.getProyectoId(idProyecto);
    const cliente = await clienteService.obtenerClientePorId(proyecto.clientId);
    
    res.send(proyectoView.crearPagina("Detalle del Proyecto", proyectoView.crearDetalleProyecto(proyecto, cliente)));
  } catch (err) {
    res.send(proyectoView.crearPagina("Error al obtener el proyecto", `<p>${err.message}</p>`));
  }
};

const nuevoProyecto = async (req, res) => {
  try {
      const clientes = await clienteService.obtenerClientes();
      res.send(proyectoView.crearPagina("Nuevo Proyecto", proyectoView.crearFormularioProyecto(clientes)));
  } catch (error) {
      res.send(clienteView.crearPagina("Error al obtener clientes", `<p>${error.message}</p>`));
  }
};


const agregarProyecto = async (req, res) => { 
  const nuevoProyecto = req.body;

  try {
    await proyectoService.agregarProyecto(nuevoProyecto);
    res.redirect('/proyectos');
  } catch (err) {
    res.send(proyectoView.crearPagina("Error al agregar el proyecto", `<p>${err}</p>`));
  }
};

const eliminarProyecto = async (req, res) => {
  const idProyecto = req.params.id;

  try {
    await proyectoService.eliminarProyecto(idProyecto);
    res.redirect("/proyectos");
  } catch (err) {
    res.send(proyectoView.crearPagina("Error al eliminar el proyecto", `<p>${err}</p>`));
  }
};

const modificarProyectoForm = async (req, res) => {
  const idProyecto = req.params.id;

  try {
    const proyecto = await proyectoService.getProyectoId(idProyecto);
    const clientes = await clienteService.obtenerClientes();

    res.send(proyectoView.crearPagina("Modificar Proyecto", proyectoView.modificarForm(proyecto, clientes)));
  } catch (err) {
    res.send(proyectoView.crearPagina("Error al modificar el proyecto", `<p>${err}</p>`));
  }
};

const modificarProyecto = async (req, res) => {
  const proyectoId = req.params.id; 
  const { name, description, link, img, technologies, section, clientId } = req.body;

  try {
    await proyectoService.modificarProyecto(proyectoId, {
      name,
      description,
      link,
      img,
      technologies,
      section,
      clientId
    });

    res.redirect('/proyectos'); 
  } catch (error) {
    res.send(proyectoView.crearPagina("Error al modificar el proyecto", `<p>${error.message}</p>`));
  }
};


export {
  getProyectos,
  getProyectoId,
  nuevoProyecto,
  agregarProyecto,
  eliminarProyecto,
  modificarProyectoForm,
  modificarProyecto
};
