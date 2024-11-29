import { valoresporDefecto } from "./valoresDefecto.js";

//Funcion de crear mejoras basada en la plantilla de index.html//
function crearMejoras() {
    const contenedorMejoras = document.getElementById('contenedor-mejoras')
    const plantilla = document.getElementById('plantilla-mejora').textContent

    valoresporDefecto.forEach((obj) => {
        let html = plantilla;

        Object.keys(obj).forEach((key) => {
            const regex = new RegExp(`{{${key}}}`, 'g');
            html = html.replace(regex, obj[key])
        });

        contenedorMejoras.innerHTML += html
    })
}

crearMejoras()

//Array de Mejoras//
export const upgrades = [
    {
        nombre: "clicker",
        costo: document.querySelector(".clicker-cost"),
        parsedCost: parseFloat(document.querySelector(".clicker-cost").innerHTML),
        aumento: document.querySelector(".clicker-increase"),
        parsedIncrease: parseFloat(document.querySelector(".clicker-increase").innerHTML),
        level: document.querySelector(".clicker-level"),
        potenciadores: [
            {
                nombre: "clicker x2",
                descripcion: "duplica tus clicks",
                multiplier: 2,
            },
            {
                nombre: "clicker x3",
                descripcion: "triplica tus clicks",
                multiplier: 3,
            },            
            {
                nombre: "clicker x4",
                descripcion: "cuatriplica tus clicks",
                multiplier: 4,
            },
            {
                nombre: "clicker x5",
                descripcion: "quintuplica tus clicks",
                multiplier: 5,
            },
            {
                nombre: "clicker x6",
                descripcion: "sextuplica tus clicks",
                multiplier: 6,
            },
        ],
        tortaMultiplier: 1.025,
        costMultiplier: 1.12,
    },
    {
        nombre: "palo",
        costo: document.querySelector(".palo-cost"),
        parsedCost: parseFloat(document.querySelector(".palo-cost").innerHTML),
        aumento: document.querySelector(".palo-increase"),
        parsedIncrease: parseFloat(document.querySelector(".palo-increase").innerHTML),
        level: document.querySelector(".palo-level"),
        potenciadores: [
            {
                nombre: "palo x2",
                descripcion: "duplica la eficiencia",
                multiplier: 2,
            },
            {
                nombre: "palo x3",
                descripcion: "triplica la eficiencia",
                multiplier: 3,
            },           
            {
                nombre: "palo x4",
                descripcion: "cuatriplica la eficiencia",
                multiplier: 4,
            },
            {
                nombre: "palo x5",
                descripcion: "quintuplica la eficiencia",
                multiplier: 5,
            },
            {
                nombre: "palo x6",
                descripcion: "sextuplica la eficiencia",
                multiplier: 6,
            },
        ],
        poder: 0,
        tortaMultiplier: 1.03,
        costMultiplier: 1.115,
    },
    {
        nombre: "panadero",
        costo: document.querySelector(".panadero-cost"),
        parsedCost: parseFloat(document.querySelector(".panadero-cost").innerHTML),
        aumento: document.querySelector(".panadero-increase"),
        parsedIncrease: parseFloat(document.querySelector(".panadero-increase").innerHTML),
        level: document.querySelector(".panadero-level"),
        potenciadores: [
            {
                nombre: "panadero x2",
                descripcion: "duplica la eficiencia",
                multiplier: 2,
            },
            {
                nombre: "panadero x3",
                descripcion: "triplica la eficiencia",
                multiplier: 3,
            },           
            {
                nombre: "panadero x4",
                descripcion: "cuatriplica la eficiencia",
                multiplier: 4,
            },
            {
                nombre: "panadero x5",
                descripcion: "quintuplica la eficiencia",
                multiplier: 5,
            },
            {
                nombre: "panadero x6",
                descripcion: "sextuplica la eficiencia",
                multiplier: 6,
            },
        ],
        poder: 0,
        tortaMultiplier: 1.035,
        costMultiplier: 1.11,
    },
    {
        nombre: "panaderia",
        costo: document.querySelector(".panaderia-cost"),
        parsedCost: parseFloat(document.querySelector(".panaderia-cost").innerHTML),
        aumento: document.querySelector(".panaderia-increase"),
        parsedIncrease: parseFloat(document.querySelector(".panaderia-increase").innerHTML),
        level: document.querySelector(".panaderia-level"),
        potenciadores: [
            {
                nombre: "panaderia x2",
                descripcion: "duplica la eficiencia",
                multiplier: 2,
            },
            {
                nombre: "panaderia x3",
                descripcion: "triplica la eficiencia",
                multiplier: 3,
            },           
            {
                nombre: "panaderia x4",
                descripcion: "cuatriplica la eficiencia",
                multiplier: 4,
            },
            {
                nombre: "panaderia x5",
                descripcion: "quintuplica la eficiencia",
                multiplier: 5,
            },
            {
                nombre: "panaderia x6",
                descripcion: "sextuplica la eficiencia",
                multiplier: 6,
            },
        ],
        poder: 0,
        tortaMultiplier: 1.04,
        costMultiplier: 1.10,
    },
    {
        nombre: "festival",
        costo: document.querySelector(".festival-cost"),
        parsedCost: parseFloat(document.querySelector(".festival-cost").innerHTML),
        aumento: document.querySelector(".festival-increase"),
        parsedIncrease: parseFloat(document.querySelector(".festival-increase").innerHTML),
        level: document.querySelector(".festival-level"),
        potenciadores: [
            {
                nombre: "festival x2",
                descripcion: "duplica la eficiencia",
                multiplier: 2,
            },
            {
                nombre: "festival x3",
                descripcion: "triplica la eficiencia",
                multiplier: 3,
            },           
            {
                nombre: "festival x4",
                descripcion: "cuatriplica la eficiencia",
                multiplier: 4,
            },
            {
                nombre: "festival x5",
                descripcion: "quintuplica la eficiencia",
                multiplier: 5,
            },
            {
                nombre: "festival x6",
                descripcion: "sextuplica la eficiencia",
                multiplier: 6,
            },
        ],
        poder: 0,
        tortaMultiplier: 1.045,
        costMultiplier: 1.096,
    },
]

export const intervalos = [10, 20, 30, 50, 70,]