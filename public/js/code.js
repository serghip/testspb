const modalPersona = new bootstrap.Modal(document.getElementById('modalPersona'))

const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}

on(document, 'click', '.btnEditar', e =>{
    const fila= e.target.parentNode.parentNode
    id_editar.value = fila.children[0].innerHTML
    fecha_editar.value = fila.children[1].innerHTML
    diadesemana_editar.value = fila.children[2].innerHTML
    hora_editar.value = fila.children[3].innerHTML
    complejo_editar.value = fila.children[4].innerHTML
    unidad_editar.value = fila.children[5].innerHTML
    tipo_editar.value = fila.children[6].innerHTML
    subtipo_editar.value = fila.children[7].innerHTML
    relacionenelhecho_editar.value = fila.children[8].innerHTML
    involucrado_editar.value = fila.children[9].innerHTML
    nombre_editar.value = fila.children[10].innerHTML
    nroidentificacion_editar.value = fila.children[11].innerHTML
    genero_editar.value = fila.children[12].innerHTML
    edad_editar.value = fila.children[13].innerHTML
    modalPersona.show()
})