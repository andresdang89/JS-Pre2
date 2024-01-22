const joyas = ['Anillo con esmeraldas 20k', 'Dije de diamantes y esmeraldas 1k', 'Pulsera de esmealdas 50k'];


const container = document.getElementById("container");

joyas.forEach((el, idx) => {
    const card = document.createElement("div");
    card.className = "card";

    const imgJoya = document.createElement("img");
    imgJoya.src = el.img;

    const btnInfo = document.createElement("button");
    btnInfo.innerText = "Comprar";
    btnInfo.onclick = () => alert("Compraste un " + joyas);

    card.appendChild(imgJoya);
    card.appendChild(btnInfo);

    container.appendChild(card);
})

const productoJoya = [
    {
        id: 1,
        nombre: "Anillo esmeralda"
    },
    {
        id: 2,
        nombre: "Dije esmeralda"
    },
    {
        id: 3,
        nombre: "Pulsera esmeraldas"
    },
];
const carrito = [];
localStorage.setItem("todosMisProductos", JSON.stringify(productoJoya));
const Joya = JSON.parse(localStorage.getItem("carrito")) || [];
console.log(productoJoya)
const productoAAgregar = {
    id: 4,
    nombre: "Comprar",
};
productoJoya.push(productoAAgregar);
localStorage.setItem("todosMisProductos", JSON.stringify(productoJoya))
console.log(productoJoya);

function addFriendSystem(pname, ptarjeta ){
    var nuevoCliente 
        name = pname
        ptarjeta = tarjeta
}

console.log(nuevoCliente);
getfriendList.push(nuevoCliente);
localStorageFriendList(friendList);

function getfriendList(){
    var  storedList = localStorage.getItem('localstorageFriendList');
    if(storedList == null){
        friendList = []
    } else {friendList = JSON.parse(storedList)}
    {
    return friendList;}
};



function localStorageFriendList(plist){
    localStorage.getItem('localstorageFriendList', JSON.stringify()(plist))
}