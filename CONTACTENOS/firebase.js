//Importaciones
import { clientForm } from "./compras.js"
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js";

//Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyByxYDl2UGXoOEFsJ6Lio7FaGzG6h5CkCo",
    authDomain: "clientes-firebase.firebaseapp.com",
    projectId: "clientes-firebase",
    storageBucket: "clientes-firebase.appspot.com",
    messagingSenderId: "867724236521",
    appId: "1:867724236521:web:e0549b021d642707fac278"
};

//Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

//Funciones para Firebase
export function saveRecord(name, email) {
    addDoc(collection(db, 'clients'), { name, email });
    clientForm.reset();
    setTimeout(() => {
        document.querySelector('#confirmParagraph').classList.remove('d-none');
    }, 500);
    setTimeout(() => {
        document.querySelector('#confirmParagraph').classList.add('d-none');
    }, 3000);
}