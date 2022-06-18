var data =[]
const bodyData= document.getElementById("bodyCompras")
function inicio(){
    console.log('compras ')
    var data=   JSON.parse(localStorage.getItem('compraProducto'))
    console.log(data)
    data.forEach(element => {
         data= document.createElement('tr')
        data.innerHTML=`
            <dt><img src="${element.image}" style="width: 120px;height: 120px;"></img></td>
            <td>${element.title}</td>
            <td>${element.price}</td>
            <td>${element.amount}</td>
            <td>${element.price}</td>
            <td><samp class="btn btn-primary" onclick="ClearProdut(${element.id})"></samp></td>
        `
        bodyData.append(data)
    });
}

function ClearProdut(id){
    data.splice(0,id)
    console
}