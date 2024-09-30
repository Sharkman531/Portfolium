import { ObjectId } from "mongodb";
import { getDB } from "../config/db.js";

async function obtenerClientes() {
    const clientesCollection = getDB().collection("clientes");
    try {
        return await clientesCollection.find().toArray();
    } catch (error) {
        console.error("Error al obtener clientes:", error);
        return [];
    }
}

async function obtenerClientePorId(id) {
    const clientesCollection = getDB().collection("clientes");  
    try {
        return await clientesCollection.findOne({ _id: new ObjectId(id) });
    } catch (error) {
        console.error("Error al obtener cliente por ID:", error);
        return null; 
    }
}

async function agregarCliente(cliente) {
    const clientesCollection = getDB().collection("clientes");
    
    const nuevoCliente = {
        ...cliente
    };

    try {
        const result = await clientesCollection.insertOne(nuevoCliente);
        return { ...nuevoCliente, _id: result.insertedId };
    } catch (error) {
        console.error("Error al agregar cliente:", error);
        return null;
    }
}

async function eliminarCliente(id) {
    const clientesCollection = getDB().collection("clientes");
    try {
        const result = await clientesCollection.deleteOne({ _id: new ObjectId(id) });
        return result.deletedCount > 0 ? id : null;
    } catch (error) {
        console.error("Error al eliminar cliente:", error);
        return null;
    }
}


async function obtenerProyectosDeCliente(idCliente) {
    const proyectosCollection = getDB().collection("proyectos");
    try {
        return await proyectosCollection.find({ clientId: idCliente }).toArray();
    } catch (error) {
        console.error("Error al obtener proyectos de cliente:", error);
        return []; 
    }
}



export {
    obtenerClientes,
    obtenerClientePorId,
    agregarCliente,
    eliminarCliente,
    obtenerProyectosDeCliente
};
