const joyas = ['Anillo', 'Dije', 'Pulsera'];

joyas.forEach((el, idx) => {
const nuevaCard = document.createElement("div");
nuevaCard.className = "card";
nuevaCard.innerHTML = `
<p>${idx + 1}</p>
<p class="nombreJoyas">${el}</p>
    `;
    

container.appendChild(nuevaCard);
});

console.log(document);


container.appendChild(etiqueta);

container.className = "container"

const button = document.createElement("button");
button.className = "btn"
button.innerText = "Compra";
button.onclick = () => alert("click");

document.body.appendChild(button)

const botonHTML = document.getElementById("btn");
console.log(botonHTML.innerText);

let index = 0;

botonHTML.addEventListener("click", () => {
const nuevaCard = document.createElement("div");
nuevaCard.className = "card";
nuevaCard.innerHTML = `
<p>${index + 1}</p>
<p class "nombreJoya">${frutas[index]}</p>
`;

if(joyas[index]){
container.appendChild(nuevaCard);
index += 1;
};


});

let flag = false;

botonHTML.addEventListener("click", () => {
if (!document.getElementsByClassName("card")[0]) {
botonHTML.innerText = "Joyas";
frutas.forEach((el, idx) => {
const nuevaCard = document.createElement("div");
nuevaCard.className = "card";
nuevaCard.innerHTML = `
<p>${idx + 1}</p>
<p class="nombreJoya">${el}</p>
`;

container.appendChild(nuevaCard);
});

flag = true;
}
else {
botonHTML.innerText = "Mostrar Joyas";
container.innerHTML = "";
flag = false;
}
});

const caja = document.createElement("div");
caja.className = "caja";

caja.onmousemove = () => console.log("Bienvenido");

document.body.appendChild(caja)
const input = document.createElement("input");
caja.className = "caja";

input.onkeydown = () => console.log("cambiaste");

document.body.appendChild(input)

allJoyas.forEach((el, idx) => {
    const card = document.createElement("div");
    card.className = "card";

    const imgJoyas = document.createElement("");
    imgJoyas.src = imgJoyas;

    const btnInfo = document.createElement("button");
    btnInfo.innerText = "Compra";
    btnInfo.onclick = () => alert("Compraste " + el.name);


    card.appendChild(imgJoyas);
    card.appendChild(btnInfo);

    container.appendChild(card);
})

function guardarLocalStorge(params) {
    localStorage.setItem("ProductosLocalStorage", JSON.stringify(arrayProductos));
}
function mostrarProductos (params){
    for(arrayProductos of array){
        alert("Compraste" + productos)
    }
}

