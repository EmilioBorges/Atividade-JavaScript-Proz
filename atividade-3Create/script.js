let elementoH1 = document.createElement("h1")
let elementoH2 = document.createElement("h2")
let elementoul = document.createElement("ul")
let elementoli = document.createElement("li")
let elementodes = document.createElement("li")
let elementoDiv = document.createElement("div")
let elementoImg = document.createElement("img")

elementoH1.innerText = "Vende-se"
elementoH2.innerText = "Carro ano 2020"
elementoli.innerText = `Valor : R$35000,00`
elementodes.innerText = `Carro ano 2020/2021 à Gasolina muito conservado e de único dono.`
elementoImg = new Image(400, 250)
elementoImg.src = "/atividade-3Create/Blog.webp"


let mostraH1 = document.querySelector("body")
mostraH1.appendChild(elementoH1)

let mostraH2 = document.querySelector("body")
mostraH1.appendChild(elementoH2)

let mostraUl = document.querySelector("body")
mostraUl.appendChild(elementoul)

let mostraLi = document.querySelector("ul")
mostraLi.appendChild(elementoli)

let mostrades = document.querySelector("ul")
mostrades.appendChild(elementodes)

let mostraDiv = document.querySelector("body")
mostraDiv.appendChild(elementoDiv)

let mostraImg = document.querySelector("div")
mostraImg.appendChild(elementoImg)