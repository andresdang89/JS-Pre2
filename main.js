const joyas = ['Anillo con esmeraldas 20k', 'Dije de diamantes y esmeraldas 1k', 'Pulsera de esmealdas 50k'];

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

container.className = "container"

const button = document.createElement("button");
button.className = "btn"
button.innerText = "Compra";
button.onclick = () => alert("Bienvenido");

const btnInfo = document.createElement("button");
    btnInfo.innerText = "Compras";
    
    


document.body.appendChild(button)

const bottonHTML = document.getElementById("btn");
console.log(bottonHTML.innerText);

let index = 0;

bottonHTML.addEventListener("click", () => {
const nuevaCard = document.createElement("div");
nuevaCard.className = "card";
nuevaCard.innerHTML = `
<p>${index + 1}</p>
<p class "nombreJoya">${joyas[index]}</p>
`;


if(joyas[index]){
container.appendChild(nuevaCard);
index += 1;
};


});

let flag = false;

bottonHTML.addEventListener("Bienvenido", () => {
if (!document.getElementsByClassName("card")[0]) {
botonHTML.innerText = "Joyas";
joyas.forEach((el, idx) => {
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
CanvasGradient.onmousemove = () => console.log("Que deseas comprar?")


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
    



    card.appendChild(imgJoyas);
    card.appendChild(btnInfo);

    container.appendChild(card);
})

localStorage.setItem("nombreUsuario", + nombreJoya);
var Joyas = localStorage.getItem("nombreJoyas");
localStorage.removeItem("nombreJoyas");


