//Importaciones
import { saveRecord } from "./firebase.js";

//Variables y selectores
export const clientForm = document.querySelector('#procesar-pago');
const fieldsParagraph = document.querySelector('#fieldsParagraph');
const emailParagraph = document.querySelector('#emailParagraph');
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//Eventos
clientForm.addEventListener('submit', sendForm);

//Funciones
function sendForm(e) {
    e.preventDefault();
    const clientName = document.querySelector('#cliente').value;
    const clientEmail = document.querySelector('#correo').value;
    if( clientName === "" || clientEmail === ""  ) {
        fieldsParagraph.classList.remove('d-none');
        setTimeout(() => {
            fieldsParagraph.classList.add('d-none');
        }, 1500);
        return;
    }    
    if(clientEmail) {
        if( er.test(clientEmail) === false ) {
            emailParagraph.classList.remove('d-none');
            setTimeout(() => {
                emailParagraph.classList.add('d-none');
            }, 1500);
            return;
        } 
    }
    saveRecord(clientName, clientEmail);
}



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
            <td><samp class="btn btn-primary" onclick="ClearProdut(${element.id})">Eliminar</samp></td>
        `
        bodyData.append(data)
    });
}

function ClearProdut(id){
    //data.splice(0,id)
    //console
}