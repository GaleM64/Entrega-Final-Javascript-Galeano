/*import { artefactosporDefecto } from "./valoresDefecto.js";

function crearMejoras() {
    const contenedorMejoras = document.getElementById('contenedor-mejoras')
    const plantilla = document.getElementById('plantilla-mejora').textContent

    artefactosporDefecto.forEach((value) => {
        let html = plantilla;

        Object.keys(value).forEach((key) => {
            const regex = new RegExp(`{{${key}}}`, 'g');
            html = html.replace(regex, value[key])
        });

        contenedorMejoras.innerHTML += html
    })
}

crearMejoras()*/