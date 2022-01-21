const Persona = require('../model/Persona')

//Mostrar
module.exports.mostrar = (req, res)=> {
    Persona.find({}, (error, personas)=>{
            if(error) {
            return res.status(500).json({
                message: 'Error mostrando las personas'
            })
        }
        return res.render('visualizacion', {personas:personas})
    })
}

//CREAR
module.exports.crear = (req, res) =>{
        const persona = new Persona({
            fecha: req.body.fecha,
            diadesemana: req.body.diadesemana,
            hora: req.body.hora,
            complejo: req.body.complejo,
            unidad: req.body.unidad,
            tipo: req.body.tipo,
            subtipo: req.body.subtipo,
            relacionenelhecho: req.body.relacionenelhecho,
            involucrado: req.body.involucrado,
            nombre: req.body.nombre,
            nroidentificacion: req.body.nroidentificacion,
            genero: req.body.genero,
            edad: req.body.edad
        })
        persona.save(function(err){
            if (err){
                res.json("Hubo un error al cargar")
            }
            else{
                res.redirect('/carga')     
            }      
        })
    }

module.exports.editar = (req,res)=>{
    const _id = req.body.id_editar
    const fecha = req.body.fecha_editar
    const diadesemana = req.body.diadesemana_editar
    const hora = req.body.hora_editar
    const complejo = req.body.complejo_editar
    const unidad = req.body.unidad_editar
    const tipo = req.body.tipo_editar
    const subtipo = req.body.subtipo_editar
    const relacionenelhecho = req.body.relacionenelhecho_editar
    const involucrado = req.body.involucrado_editar
    const nombre = req.body.nombre_editar
    const nroidentificacion = req.body.nroidentificacion_editar
    const genero = req.body.genero_editar
    const edad = req.body.edad_editar
    _id.trim()
    console.log(_id)
    Persona.findOneAndUpdate({id: _id}, {$set:{fecha:fecha, diadesemana:diadesemana, hora:hora, complejo:complejo, unidad:unidad, tipo:tipo, subtipo:subtipo, relacionenelhecho:relacionenelhecho, involucrado:involucrado, nombre:nombre, nroidentificacion:nroidentificacion, genero:genero, edad:edad}}, {new: true}, (err, doc) => {
        if (err) {
            console.log("Error actualizando");
        }
        res.redirect('/visualizacion')
    });
}
//Borrar
module.exports.borrar = (req, res)=>{
    const id = req.params.id
    Persona.findByIdAndRemove(id, (error, persona)=>{
        if(error){
            return res.status(500).json({
                message: 'Error eliminando la persona'
            })
        }
        res.redirect('/visualizacion')
    })
}

module.exports.buscar = (req, res) => {
    const fecha= req.body.fecha
    const nombre= req.body.nombre
    const nroidentificacion= req.body.nroidentificacion
    const edad=  req.body.edad
    const subfiltro= req.body.subfiltro
    const filtro = req.body.filtro

    if (filtro == "1"){
        Persona.find({ fecha: fecha}, function (err, personas) {
            if (err) {
                return res.json({
                    success: false,
                    msj: 'No se encontró ningúna persona con ese filtro',
                    err
                });
            } else {
                res.render('visualizacion', { personas: personas })
            }
        })
    }
    if(filtro == "2" ){
        Persona.find({ diadesemana: subfiltro}, function (err, personas) {
            if (err) {
                return res.json({
                    success: false,
                    msj: 'No se encontró ningúna persona con ese filtro',
                    err
                });
            } else {
                res.render('visualizacion', { personas: personas })
            }
        })
    }
    if(filtro == "3" ){
        Persona.find({ hora: subfiltro}, function (err, personas) {
            if (err) {
                return res.json({
                    success: false,
                    msj: 'No se encontró ningúna persona con ese filtro',
                    err
                });
            } else {
                res.render('visualizacion', { personas: personas })
            }
        })
    }
    if(filtro == "4" ){
        Persona.find({ complejo: subfiltro}, function (err, personas) {
            if (err) {
                return res.json({
                    success: false,
                    msj: 'No se encontró ningúna persona con ese filtro',
                    err
                });
            } else {
                res.render('visualizacion', { personas: personas })
            }
        })
    }
    if(filtro == "5" ){
        Persona.find({ unidad: subfiltro}, function (err, personas) {
            if (err) {
                return res.json({
                    success: false,
                    msj: 'No se encontró ningúna persona con ese filtro',
                    err
                });
            } else {
                res.render('visualizacion', { personas: personas })
            }
        })
    }
    if(filtro == "6" ){
        Persona.find({ tipo: subfiltro}, function (err, personas) {
            if (err) {
                return res.json({
                    success: false,
                    msj: 'No se encontró ningúna persona con ese filtro',
                    err
                });
            } else {
                res.render('visualizacion', { personas: personas })
            }
        })
    }
    if(filtro == "7" ){
        Persona.find({ subtipo: subfiltro}, function (err, personas) {
            if (err) {
                return res.json({
                    success: false,
                    msj: 'No se encontró ningúna persona con ese filtro',
                    err
                });
            } else {
                res.render('visualizacion', { personas: personas })
            }
        })
    }
    if(filtro == "8" ){
        Persona.find({ relacionenelhecho: fecha}, function (err, personas) {
            if (err) {
                return res.json({
                    success: false,
                    msj: 'No se encontró ningúna persona con ese filtro',
                    err
                });
            } else {
                res.render('visualizacion', { personas: personas })
            }
        })
    }
    if(filtro == "9" ){
        Persona.find({ involucrado: subfiltro}, function (err, personas) {
            if (err) {
                return res.json({
                    success: false,
                    msj: 'No se encontró ningúna persona con ese filtro',
                    err
                });
            } else {
                res.render('visualizacion', { personas: personas })
            }
        })
    }
    if(filtro == "10" ){
        Persona.find({ nombre: nombre}, function (err, personas) {
            if (err) {
                return res.json({
                    success: false,
                    msj: 'No se encontró ningúna persona con ese filtro',
                    err
                });
            } else {
                res.render('visualizacion', { personas: personas })
            }
        })
    }
    if(filtro == "11" ){
        Persona.find({ nroidentificacion: nroidentificacion}, function (err, personas) {
            if (err) {
                return res.json({
                    success: false,
                    msj: 'No se encontró ningúna persona con ese filtro',
                    err
                });
            } else {
                res.render('visualizacion', { personas: personas })
            }
        })
    }
    if(filtro == "12" ){
        Persona.find({ genero: subfiltro}, function (err, personas) {
            if (err) {
                return res.json({
                    success: false,
                    msj: 'No se encontró ningúna persona con ese filtro',
                    err
                });
            } else {
                res.render('visualizacion', { personas: personas })
            }
        })
    }
    if(filtro == "13" ){
        Persona.find({ edad: edad}, function (err, personas) {
            if (err) {
                return res.json({
                    success: false,
                    msj: 'No se encontró ningúna persona con ese filtro',
                    err
                });
            } else {
                res.render('visualizacion', { personas: personas })
            }
        })
    }
  
   
    
}
