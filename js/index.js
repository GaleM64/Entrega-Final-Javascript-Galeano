import { upgrades } from "./constantes/upgrades.js"

let torta = document.querySelector(".torta-cost")
let parsedTorta = parseFloat(torta.innerHTML)

let tpcText = document.getElementById("tpc-text")
let tpsText = document.getElementById("tps-text")

let tortaImgContainer = document.querySelector(".torta-img-container")
let tpc = 1;

let tps = 0;

const tortaclick = document.getElementById("tortaclick");
tortaclick.addEventListener("click", aumentartortaf );

function aumentartortaf(event) {
    torta.innerHTML =  Math.round(parsedTorta += tpc);

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

function comprarMejora(upgrade) {
    const mu = upgrades.find((u) => {
        if (u.name === upgrade) return u
    })

    if (parsedTorta >= mu.parsedCost) {
        torta.innerHTML = Math.round(parsedTorta -= mu.parsedCost);

        mu.level.innerHTML ++

        mu.parsedIncrease = parseFloat((mu.parsedIncrease * mu.tortaMultiplier).toFixed(2))
        mu.increase.innerHTML = mu.parsedIncrease

        mu.parsedCost *= mu.costMultiplier;
        mu.cost.innerHTML = Math.round(mu.parsedCost)
        if (mu.name ==='clicker') {
            tpc += mu.parsedIncrease
        } else {
            tps += mu.parsedIncrease
        }
    }
}; //mu = matchedUpgrades

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

        localStorage.setItem(upgrade.name, obj)
    })

    localStorage.setItem('tpc',JSON.stringify(tpc))
    localStorage.setItem('tps',JSON.stringify(tps))
    localStorage.setItem('tortas',JSON.stringify(parsedTorta))
}

const btnC = document.querySelector("#cargar");

btnC.addEventListener("click", load);

    function load () {
        upgrades.map((upgrade) => {
            const savedValues = JSON.parse(localStorage.getItem(upgrade.name))
    
            upgrade.parsedCost = savedValues.parsedCost
            upgrade.parsedIncrease = savedValues.parsedIncrease
    
            upgrade.level.innerHTML = savedValues.parsedLevel
            upgrade.cost.innerHTML = Math.round(upgrade.parsedCost)
            upgrade.increase.innerHTML = upgrade.parsedIncrease
        })
    
        tpc = JSON.parse(localStorage.getItem('tpc'))
        tps = JSON.parse(localStorage.getItem('tps'))
        parsedTorta = JSON.parse(localStorage.getItem('tortas'))
    
        torta.innerHTML = Math.round(parsedTorta)
}

setInterval (() => {
    parsedTorta += tps / 10
    torta.innerHTML = Math.round(parsedTorta)
    tpcText.innerHTML = Math.round(tpc)
    tpsText.innerHTML = Math.round(tps)
}, 100)

window.aumentartortaf = aumentartortaf
window.comprarMejora = comprarMejora
window.save = save
window.load = load