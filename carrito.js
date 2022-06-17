class container{
    añadir_carrito(e){
        e.preventDefault();
        if(e.target.classList.container("añadir_carrito")){
            const producto = e.target.parentElement.parentElement;
            //this.leerDatosProducto(producto)
            console.log(producto);
        }
    }

}
