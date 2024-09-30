import * as service from "../../services/proyectos.service.js"

function getProyectos(req, res){
    service.getProyectos()
        .then( (proyectos) => res.status(200).json(proyectos) )
}

function agregarProyecto( req, res ){
    service.agregarProyecto(req.body)
        .then( (proyecto) => res.status(201).json(proyecto) ) 
}
function reemplazarProyecto(req, res){
    const id = req.params.id
    service.reemplazarProyecto(id, req.body)
        .then(proyecto => res.status(201).json(proyecto)) 
}

function modificarProyecto(req, res){
    const id = req.params.id
    service.modificarProyecto(id, req.body)
        .then(proyecto => {
            if( proyecto ){
                res.status(201).json(proyecto)
            }else{
                res.status(404).json({error: { message: "No se encuentra el proyecto." }})
            }
        })
}

function eliminarProyecto(req, res){
    const id = req.params.id
    service.eliminarProyecto(id)
        .then( (id) => res.status(202).json({id: id}) )
}

export {
    getProyectos,
    agregarProyecto,
    reemplazarProyecto,
    modificarProyecto,
    eliminarProyecto
}