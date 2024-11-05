import { valoresmejoras } from "./valoresmejoras.js";

function crearMejoras() {
    const contenedorMejoras = document.getElementById("contenedor-mejoras")
    const plantillaMejoras = document.getElementById("plantilla-mejoras").textContent

    valoresmejoras.forEach((valor) => {
        let html = plantillaMejoras;

        Object.keys(valor).forEach((key) => {
            const expreg = new RegExp(`{{${key}}}`, 'g')
            html = html.replace(expreg, valor[key])
        });

        contenedorMejoras.innerHTML += html
    })
}

crearMejoras()

export const upgrades = [
    {
        name: "clicker",
        cost: document.querySelector(".clicker-cost"),
        parsedCost: parseFloat(document.querySelector(".clicker-cost").innerHTML),
        increase: document.querySelector(".clicker-increase"),
        parsedIncrease: parseFloat(document.querySelector(".clicker-increase").innerHTML),
        level: document.querySelector(".clicker-level"),
        tortaMultiplier: 1.025,
        costMultiplier: 1.12,
    },
    {
        name: "pamasar",
        cost: document.querySelector(".pamasar-cost"),
        parsedCost: parseFloat(document.querySelector(".pamasar-cost").innerHTML),
        increase: document.querySelector(".pamasar-increase"),
        parsedIncrease: parseFloat(document.querySelector(".pamasar-increase").innerHTML),
        level: document.querySelector(".pamasar-level"),
        tortaMultiplier: 1.03,
        costMultiplier: 1.115,
    },
    {
        name: "panadero",
        cost: document.querySelector(".panadero-cost"),
        parsedCost: parseFloat(document.querySelector(".panadero-cost").innerHTML),
        increase: document.querySelector(".panadero-increase"),
        parsedIncrease: parseFloat(document.querySelector(".panadero-increase").innerHTML),
        level: document.querySelector(".panadero-level"),
        tortaMultiplier: 1.035,
        costMultiplier: 1.11,
    },
    {
        name: "panaderia",
        cost: document.querySelector(".panaderia-cost"),
        parsedCost: parseFloat(document.querySelector(".panaderia-cost").innerHTML),
        increase: document.querySelector(".panaderia-increase"),
        parsedIncrease: parseFloat(document.querySelector(".panaderia-increase").innerHTML),
        level: document.querySelector(".panaderia-level"),
        tortaMultiplier: 1.04,
        costMultiplier: 1.10,
    },
    {
        name: "festival",
        cost: document.querySelector(".festival-cost"),
        parsedCost: parseFloat(document.querySelector(".festival-cost").innerHTML),
        increase: document.querySelector(".festival-increase"),
        parsedIncrease: parseFloat(document.querySelector(".festival-increase").innerHTML),
        level: document.querySelector(".festival-level"),
        tortaMultiplier: 1.045,
        costMultiplier: 1.09,
    },
]