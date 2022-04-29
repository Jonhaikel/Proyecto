const addToShoppingCarButtons = document.querySelectorAll(".shop")


const contendorCarrito = document.getElementById('tablas');

addToShoppingCarButtons.forEach((addToCartButton) => {
    addToCartButton.addEventListener('click', addToCartCliked);
});

const botonVaciar = document.getElementById('vaciar-carrito')

botonVaciar.addEventListener('click',()=>{
    carrito.length = 0;
    actualizarCarrito();
    localStorage.clear();
})

const precioTotal = document.getElementById('total');
let carrito = [];

document.addEventListener('DOMContentLoaded', () =>{
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito();
    }
})


function addToCartCliked(event) {
    const button = event.target;
    const item = button.closest('.col')
    
    const itemTitle = item.querySelector('#nombre').textContent;
    const itemPrice = item.querySelector('#txt').textContent;
    const itemImage = item.querySelector('.im').src;
    const itemCantidad = item.querySelector('.catidad-items')
    
    for (let i = 0; i < carrito.length; i++){
        if(carrito[i].titulo === itemTitle){
           
           carrito[i].cantidad++
           actualizarCarrito();
           updateShoppingCartTotal();
           return;
        }
    }

   const produc = {
       id: 0,
       imagen: itemImage,
       titulo: itemTitle,
       precio: itemPrice,
       cantidad: 1
   }
   carrito.push(produc);
    console.log(carrito);
    actualizarCarrito();
}

const eliminarDelCarrito = (prodId) => {

    const item = carrito.find((prod) => (prod.id-1) === prodId);
    const indice = carrito.indexOf(item);
    console.log(indice);
    carrito.splice(indice, 1);
    
    localStorage.clear();
    actualizarCarrito();
}

const actualizarCarrito = () => {

    contendorCarrito.innerHTML = "";

carrito.forEach((prod) => {
    const div = document.createElement('tr');
    const shoppinCartContente = `

    <tr class="carrito-items">

    <td data-label="Imagen" class="image"><img  src="${prod.imagen}" alt=""></td>
    <td data-label="Nombre" class="titleItem">${prod.titulo}</td>
    <td data-label="Cantidad" class="catidad-items"><input type="number" class="cantidadI" value="${prod.cantidad}"></td>
    <td data-label="Precio" class="precio-item">${prod.precio}</td>
    <button class="eliminar" onclick="eliminarDelCarrito(${prod.id})">X</button>  
    </tr>
    `
    div.innerHTML = shoppinCartContente;
    contendorCarrito.appendChild(div);
    prod.id++;
    div.querySelector('.catidad-items').addEventListener('change', cantidadCambiada);
    localStorage.setItem('carrito', JSON.stringify(carrito))
})
updateShoppingCartTotal();

}

function updateShoppingCartTotal() {
    const precioTotal = document.querySelector('.total');
    
    const total = carrito.reduce((acc, prod) => acc + Number(prod.precio.replace("$", "")*prod.cantidad), 0);
    precioTotal.innerText = `$${total}`
    

    
}

function cantidadCambiada(event) {
    const cantidad = event.target;
    const titulo = cantidad.parentElement.parentElement.querySelector('.titleItem').textContent;

    const cantidadi = cantidad.value;
    
    if(cantidad.value <= 0){
        cantidad.value = 1;
        return;
    } 

    for (let i = 0; i < carrito.length; i++){
        if(carrito[i].titulo === titulo){
            if(carrito[i].cantidad < cantidadi){
                console.log('si entro')
                carrito[i].cantidad++
                actualizarCarrito();
            }else{
                console.log('si entro pero en menos')
                carrito[i].cantidad--
                actualizarCarrito();
            }
           
        }
    }
    updateShoppingCartTotal();
 }