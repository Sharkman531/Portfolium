// utils.js

export function obtenerNombreCliente(clientId, clientes) {
    const cliente = clientes.find(cliente => cliente._id.toString() === clientId.toString());
    return cliente ? cliente.nombre : 'No asignado';
}
 