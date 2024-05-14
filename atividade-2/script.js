let elementoH1 = document.querySelector("#titulo")
let elementoA = document.querySelector("a")
let elementoUl = document.querySelector("ul")
let elementoOl = document.querySelector("#lista-ordenada")

elementoH1.innerText = `Titulo do H1`
elementoA.innerText = `Site da Proz`

elementoUl.innerHTML = `

    <li>Html</li>
    <li>Css</li>
    <li>Python</li>

`
elementoOl.innerHTML = `

    <li>Angular</li>
    <li>Banco de Dados</li>
    <li>NodeJs</li>

`