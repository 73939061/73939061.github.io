const carro = new Carrito();
const carrito = document.getElementById("carrito");
const productos = document.getElementById("lista-producto");
const listaProducto = document.querySelector("#lista-carrito tbody");
const vaciarCarrito = document.getElementById("vaciar-Carrito");

cargarEventos();

function cargarEvento(){
    productos.addEventListener("click", (e)=> {carro.comprarProducto(e)});

    carrito.addEventListener("click", (e)=>{carro.eliminarProducto(e)});

    
}
