import * as clienteService from "../services/clientes.service.js";
import * as clienteView from "../views/clientes.view.js";

const obtenerClientes = async (req, res) => {
  try {
    const clientes = await clienteService.obtenerClientes();
    res.send(clienteView.crearPagina("Listado de Clientes", clienteView.mostrarClientes(clientes)));
  } catch (error) {
    res.send(clienteView.crearPagina("Error al obtener clientes", `<p>${error}</p>`));
  }
};

const nuevoCliente = (req, res) => {
  res.send(clienteView.crearPagina("Nuevo Cliente", clienteView.crearFormularioCliente()));
};

const agregarCliente = async (req, res) => { 
  const { nombre, foto, descripcion } = req.body;
  const nuevoCliente = { nombre, foto, descripcion };

  try {
    await clienteService.agregarCliente(nuevoCliente);
    res.redirect('/clientes');
  } catch (err) {
    res.send(clienteView.crearPagina("Error al agregar el cliente", `<p>${err}</p>`));
  }
};

const obtenerProyectosPorCliente = async (req, res) => {
  const clienteId = req.params.id; 

  try {
    const cliente = await clienteService.obtenerClientePorId(clienteId);
    const proyectos = await clienteService.obtenerProyectosDeCliente(clienteId); 

    if (proyectos.length === 0) {
      return res.send(clienteView.crearPagina("Proyectos del Cliente", `<h1>El cliente ${cliente.nombre} aún no tiene proyectos asignados</h1>`));
    }

    res.send(clienteView.crearPagina(`Proyectos del Cliente ${cliente.nombre}`, clienteView.crearListadoProyectosPorCliente(proyectos, cliente)));
  } catch (error) {
    res.send(clienteView.crearPagina("Error al cargar proyectos del cliente", `<p>${error.message}</p>`));
  }
};

const eliminarCliente = async (req, res) => {
  const clienteId = req.params.id;

  try {
    const result = await clienteService.eliminarCliente(clienteId);
    if (result) {
      res.redirect('/clientes'); 
    } else {
      res.send(clienteView.crearPagina("Error", `<p>No se pudo eliminar el cliente con ID ${clienteId}</p>`));
    }
  } catch (error) {
    res.send(clienteView.crearPagina("Error al eliminar cliente", `<p>${error.message}</p>`));
  }
};

export {
  obtenerClientes,
  nuevoCliente,
  agregarCliente,
  obtenerProyectosPorCliente,
  eliminarCliente 
};
