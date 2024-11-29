import { forNum } from "../constants/formato.js";
import { intervalos, upgrades } from "../constants/mejoras.js";
import { valoresporDefecto } from "../constants/valoresDefecto.js";

let torta = document.querySelector(".torta-cost")
let parsedTorta = parseFloat(torta.innerHTML)

let tpcText = document.getElementById("tpc-text")
let tpsText = document.getElementById("tps-text")

let tortaImgContainer = document.querySelector(".torta-img-container")

let botonPrestigio = document.querySelector(".prestige-button")

let reliquia = document.getElementById('reliquia')

let popupform = document.getElementById("miModal");
let closepopup = document.getElementsByClassName("close")[0];

let popupTable = document.getElementById("table")

let form = document.getElementById("formID");

let tpc = 1;
let tps = 0;

const mdf = new Audio("./assets/audio/bgm.mp3")
mdf.volume = 0.2

const tortaclick = document.getElementById("tortaclick");
tortaclick.addEventListener("click", aumentartortaf );

Swal.fire({
    title: "Bienvenid@ a Torta Frita Clicker",
    html: "Un juego muy simple que podes jugar si no tenes otra cosa o tenerlo de fondo mientras estas haciendo algo mas.<br> Patrocinado por La Morenita quien te ofrece participar por un premio si llegas al millon de tortas fritas y usas el boton de prestigio para reiniciar tu progreso",
    icon: "info",
});

//Funcion de sumar tortas al clickear//
function aumentartortaf(event) {
    const sonidoClick = new Audio("./assets/audio/click.wav")
    sonidoClick.play()

    torta.innerHTML =  forNum(parsedTorta += tpc);

    const x = event.offsetX
    const y = event.offsetY

    const div = document.createElement("div")
    div.innerHTML = `+${Math.round(tpc)}`
    div.style.cssText = `color: white; position: absolute; top: ${y}px; left: ${x}px; font-size: 15px; pointer-events: none;`
    tortaImgContainer.appendChild(div)

    div.classList.add("fade-up")

    timeout(div)
}

const timeout = (div) => {
    setTimeout(() => {
        div.remove()
    }, 800)
}

//Funcion de compra de mejoras//
function comprarMejora(upgrade) {

    const mu = upgrades.find((u) => {
        if (u.nombre === upgrade) return u
    })

    const divMejora = document.getElementById(`${mu.nombre}-upgrade`)
    const divproxlvl = document.getElementById(`${mu.nombre}-next-level`)
    const divlvlP = document.getElementById(`${mu.nombre}-next-p`)

    if (parsedTorta >= mu.parsedCost) {
        const sonidoMejora = new Audio("./assets/audio/upgrade.mp3")
        sonidoMejora.volume = 0.3
        sonidoMejora.play()

        torta.innerHTML = forNum(parsedTorta -= mu.parsedCost);

        let index = intervalos.indexOf(parseFloat(mu.level.innerHTML))

        if ( index !== -1 ) {
            divMejora.style.cssText = `border-color: white`;
            divproxlvl.style.cssText = `background-color: #5A5959; font-weight: normal`;
            mu.costo.innerHTML = Math.round(mu.parsedCost *= mu.costMultiplier)

            if ( mu.nombre === 'clicker' ) {
                tpc *= mu.potenciadores[index].multiplier
                divlvlP.innerHTML = `+${mu.parsedIncrease} tortas por click`
            } else {
                tps -= mu.poder
                mu.poder *= mu.potenciadores[index].multiplier
                tps += mu.poder
                divlvlP.innerHTML = `+${mu.parsedIncrease} tortas por segundo`
            }
        }

        mu.level.innerHTML ++

        index = intervalos.indexOf(parseFloat(mu.level.innerHTML))

        if ( index !== -1 ) {
            divMejora.style.cssText = `border-color: orange`;
            divproxlvl.style.cssText = `background-color: #CC4500; font-weight: bold`;
            divlvlP.innerText = mu.potenciadores[index].descripcion

            mu.costo.innerHTML = Math.round(mu.parsedCost *2.5 * 1.004 ** parseFloat(mu.level.innerHTML))
        } else {
            mu.costo.innerHTML = Math.round(mu.parsedCost *= mu.costMultiplier)
            mu.parsedIncrease = parseFloat((mu.parsedIncrease * mu.tortaMultiplier).toFixed(2))

            if ( mu.nombre === 'clicker') divlvlP.innerHTML = `+${mu.parsedIncrease} tortas por click`
            else divlvlP.innerHTML = `+${mu.parsedIncrease} tortas por segundo`
        }

        if ( mu.nombre === 'clicker' ) tpc += mu.parsedIncrease
        else {
            tps -= mu.poder
            mu.poder += mu.parsedIncrease
            tps += mu.poder
        }
    }
}

//Funcion de Guardar Partida//
const btnG = document.querySelector("#guardar");

btnG.addEventListener("click", save);

function save () {
    localStorage.clear()

    upgrades.map((upgrade) => {
        const obj = JSON.stringify({
            parsedLevel: parseFloat(upgrade.level.innerHTML),
            parsedCost: upgrade.parsedCost,
            parsedIncrease: upgrade.parsedIncrease
        })

        localStorage.setItem(upgrade.nombre, obj)
    })

    localStorage.setItem('tpc',JSON.stringify(tpc))
    localStorage.setItem('tps',JSON.stringify(tps))
    localStorage.setItem('tortas',JSON.stringify(parsedTorta))
}

//Funcion de Cargar Partida//
const btnC = document.querySelector("#cargar");

btnC.addEventListener("click", load);

    function load () {
        upgrades.map((upgrade) => {
            const savedValues = JSON.parse(localStorage.getItem(upgrade.nombre))
    
            upgrade.parsedCost = savedValues.parsedCost
            upgrade.parsedIncrease = savedValues.parsedIncrease
    
            upgrade.level.innerHTML = savedValues.parsedLevel
            upgrade.costo.innerHTML = Math.round(upgrade.parsedCost)
            upgrade.aumento.innerHTML = upgrade.parsedIncrease
        })
    
        tpc = JSON.parse(localStorage.getItem('tpc'))
        tps = JSON.parse(localStorage.getItem('tps'))
        parsedTorta = JSON.parse(localStorage.getItem('tortas'))
    
        torta.innerHTML = Math.round(parsedTorta)
}


//Funcion de prestigio//
const btnPres = document.querySelector("#prestigio");

btnPres.addEventListener("click", prestigio);

function prestigio() {
    upgrades.map((upgrade) => {
        const mu = valoresporDefecto.find((u) => { if (upgrade.nombre === u.nombre) return u })
        
        upgrade.parsedCost = mu.costo
        upgrade.parsedIncrease = mu.aumento

        upgrade.level.innerHTML = 0
        upgrade.costo.innerHTML = mu.costo
        upgrade.aumento.innerHTML = mu.aumento

        const divMejora = document.getElementById(`${mu.nombre}-upgrade`)
        const divproxlvl = document.getElementById(`${mu.nombre}-next-level`)
        const divlvlP = document.getElementById(`${mu.nombre}-next-p`)

        divMejora.style.cssText = `border-color: white`;
        divproxlvl.style.cssText = `background-color: #5A5959; font-weight: normal`;
        divlvlP.innerHTML = `+${mu.aumento} tortas por click`
    })
    reliquia.innerHTML = Math.ceil(Math.sqrt(parsedTorta - 999999) / 300)

    if (reliquia.innerHTML >= 1 ) {
        popupform.style.display = "block";
    }

    tpc = 1
    tps = 0
    parsedTorta = 0
    torta.innerHTML = parsedTorta
}

setInterval (() => {
    parsedTorta += tps / 10
    torta.innerHTML = forNum(parsedTorta)
    tpcText.innerHTML = Math.round(tpc)
    tpsText.innerHTML = Math.round(tps);
    mdf.play()

    if(parsedTorta >= 1_000_000) {
        botonPrestigio.style.display = "block"
    } else {
        botonPrestigio.style.display = "none"
    }
}, 100)

//Modal de formulario//

function submitForm(event) {
    event.preventDefault();
    popupform.style.display = "none";
    Swal.fire({
        title: "Datos Enviados",
        text: "Muchas gracias por participar, eres libre de seguir jugando si lo deseas( o puedes irte a comer unas tortas fritas )",
        icon: "success",
        customClass: {
            confirmButton: 'custom-alert',
        },
    });
}
form.addEventListener('submit', submitForm);

closepopup.onclick = function() {
popupform.style.display = "none";
}

window.onclick = function(event) {
if (event.target == popupform) {
    popupform.style.display = "none";
    }
}

//Guardado de datos array en string json//

const btnS = document.getElementById("guardar-datos");

btnS.addEventListener("click", guardarDatos);

function guardarDatos() {

    const datosArray = [];
    
    let inputNombre = document.getElementById("name");
    let inputEmail = document.getElementById("email");
    let inputNumero = document.getElementById("number");

    let iVAL1 = inputNombre.value;
    let iVAL2 = inputEmail.value;
    let iVAL3 = inputNumero.value;
    
    datosArray.push(iVAL1, iVAL2, iVAL3);
    
    let inputDataJSON = JSON.stringify(datosArray);
console.log(inputDataJSON);
}

//Modal de tabla de participantes//
function displayTable() {
    popupTable.style.display = "block"
}

const btnPart = document.getElementById("participantes");

btnPart.addEventListener("click", displayTable)

closepopup.onclick = function() {
popupTable.style.display = "none";
}

window.onclick = function(event) {
if (event.target == popupTable) {
    popupTable.style.display = "none";
    }
}

//Fetch de datos del archivos json//
    fetch("/participantes.json")
        .then(function(response){
            return response.json();
        })
        .then(function(datos){
            let displayData = document.querySelector("#fetched-data");
            let out = "";
            for (let dato of datos){
                out += `
                    <tr>
                        <td>${dato.name}</td>
                        <td>${dato.number}</td>
                    </tr>
                `;
            }

            displayData.innerHTML = out;
        })





window.aumentartortaf = aumentartortaf
window.comprarMejora = comprarMejora
window.save = save
window.load = load
window.prestigio = prestigio