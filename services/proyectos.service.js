import { ObjectId } from "mongodb";
import { getDB } from "../config/db.js";

async function getProyectos() {
    const proyectosCollection = getDB().collection("proyectos");
    try {
        return await proyectosCollection.find().toArray();
    } catch (error) {
        console.error("Error al obtener proyectos:", error);
        return [];
    }
}

async function obtenerProyectosPorSeccion(seccion) { 
    const proyectosCollection = getDB().collection("proyectos");
    try {
        return await proyectosCollection.find({ section: seccion }).toArray();
    } catch (error) {
        console.error("Error al obtener proyectos por sección:", error);
        return [];
    }
}

async function getProyectoId(id) { 
    const proyectosCollection = getDB().collection("proyectos");
    try {
        const proyecto = await proyectosCollection.findOne({ _id: new ObjectId(id) }); 
        return proyecto || {};
    } catch (error) {
        console.error("Error al obtener proyecto por ID:", error);
        return {};
    }
}

async function agregarProyecto(proyecto) {
    const proyectosCollection = getDB().collection("proyectos");

    const nuevoProyecto = {
        technologies: Array.isArray(proyecto.technologies) ? proyecto.technologies : [],
        ...proyecto
    };

    try {
        const result = await proyectosCollection.insertOne(nuevoProyecto);
        return { ...nuevoProyecto, _id: result.insertedId };
    } catch (error) {
        console.error("Error al agregar proyecto:", error);
        return null;
    }
}

async function eliminarProyecto(id) {
    const proyectosCollection = getDB().collection("proyectos");
    try {
        await proyectosCollection.deleteOne({ _id: new ObjectId(id) });
        return id;
    } catch (error) {
        console.error("Error al eliminar proyecto:", error);
        return null;
    }
}

async function modificarProyecto(id, proyectoActualizado) {
    const proyectosCollection = getDB().collection("proyectos");
    try {
        await proyectosCollection.updateOne(
            { _id: new ObjectId(id) },
            { $set: proyectoActualizado }
        );
        return { id, ...proyectoActualizado }; 
    } catch (error) {
        console.error("Error al modificar proyecto:", error);
        return null;
    }
}

export {
    getProyectos,
    obtenerProyectosPorSeccion,
    getProyectoId,
    agregarProyecto,
    eliminarProyecto,
    modificarProyecto
};
