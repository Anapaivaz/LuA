import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";

// Configurações do Firebase
const configuracaoFirebase = {
    apiKey: "AIzaSyDbhcfDSIMrELJHq85_kUSNINx6Lvdegr0",
    authDomain: "lua-loja.firebaseapp.com",
    projectId: "lua-loja",
    storageBucket: "lua-loja.appspot.com",
    messagingSenderId: "1075800989463",
    appId: "1:1075800989463:web:b391dec64e45210b4d6152",
    measurementId: "G-JCE7X46M3W"
};

// Inicialize o Firebase
const app = initializeApp(configuracaoFirebase);
const auth = getAuth(app);

// Função de login
async function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    try {
        await signInWithEmailAndPassword(auth, email, password);
        window.location.href = "LuA.html";
    } catch (error) {
        document.getElementById('mensagemErro').innerText = "Erro ao fazer login: " + error.message;
    }
}

// Função de registro
async function registrar() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Registro bem-sucedido!");
        window.location.href = "LuA.html";
    } catch (error) {
        document.getElementById('mensagemErro').innerText = "Erro ao registrar: " + error.message;
    }
}

// Função de logout
async function logout() {
    try {
        await signOut(auth);
        window.location.href = "index.html";
    } catch (error) {
        console.error("Erro ao sair:", error);
    }
}

// Tornando as funções acessíveis globalmente
window.login = login;
window.registrar = registrar;
window.logout = logout;
