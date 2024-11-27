/*import { habilidadesporDefecto } from "./valoresDefecto.js";

//Funcion para crear habilidaddes//
function crearHabilidades() {
    const contenedorMejoras = document.getElementById('contenedor-mejoras')
    const plantilla = document.getElementById('plantilla-mejora').textContent

    habilidadesporDefecto.forEach((value) => {
        let html = plantilla;

        Object.keys(value).forEach((key) => {
            const regex = new RegExp(`{{${key}}}`, 'g');
            html = html.replace(regex, value[key])
        });

        contenedorMejoras.innerHTML += html
    })
}

crearHabilidades()*/