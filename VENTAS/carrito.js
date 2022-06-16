class carrito{
    comprarProducto(e){
        e.preventDefault();
        if(e.target.classList.containers("añadir-carrito")){
            const producto = e.target.parentElement.parentElement;
            //this.leerDatosProducto(producto)
            console.log(producto);
        }
    }

}
