function colocar_right(numero){
    let contenido = document.getElementById(`contenido_${numero}`)
    let imagen = document.getElementById(`imagen_${numero}`)
    contenido.classList.add(`mostrar_right${numero}`)
    imagen.classList.add(`encoger_right${numero}`)
}
function eliminar_right(numero){

    let contenido = document.getElementById(`contenido_${numero}`)
    let imagen = document.getElementById(`imagen_${numero}`)

    contenido.classList.remove(`mostrar_right${numero}`)
    imagen.classList.remove(`encoger_right${numero}`)
}
function colocar_left(numero){
    let contenido = document.getElementById(`contenido_${numero}`)
    let imagen = document.getElementById(`imagen_${numero}`)
    console.log(imagen)
    contenido.classList.add(`mostrar_left${numero}`)
    imagen.classList.add(`encoger_left${numero}`)
}
function eliminar_left(numero){

    let contenido = document.getElementById(`contenido_${numero}`)
    let imagen = document.getElementById(`imagen_${numero}`)

    contenido.classList.remove(`mostrar_left${numero}`)
    imagen.classList.remove(`encoger_left${numero}`)
}

function informacion(){
 let informacion = document.getElementById("informacion")
 let formulario = document.getElementById("formulario")
 let img_informacion = document.getElementById("img_form")

informacion.classList.add("ocultar_informacion")
formulario.classList.add("mostrar_formulario")
img_informacion.classList.add("mostrar_informacion")
}

function ocultar(){
    let informacion = document.getElementById("informacion")
    let formulario = document.getElementById("formulario")
    let img_informacion = document.getElementById("img_form")
   informacion.classList.remove("ocultar_informacion")
   formulario.classList.remove("mostrar_formulario")
    img_informacion.classList.remove("mostrar_informacion")

}
function form(event){
    event.preventDefault()
    alert("Sus datos se enviaron correctamente")
    let informacion = document.getElementById("informacion")
    let formulario = document.getElementById("formulario")
    let img_informacion = document.getElementById("img_form")
   informacion.classList.remove("ocultar_informacion")
   formulario.classList.remove("mostrar_formulario")
    img_informacion.classList.remove("mostrar_informacion")
}