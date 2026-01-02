import "./styles.css"
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";
console.log("Index.js iniciado correctamente...")

const navbar = document.querySelector('#navbar');
const homeBtn = document.querySelector('#home-btn');
const menuBtn = document.querySelector('#menu-btn');
const contactBtn = document.querySelector('#contact-btn');

loadHome()

navbar.addEventListener('click', (e) => {
    if (e.target.closest('button')) {
        if (e.target.id === "home-btn") loadHome();
        if (e.target.id === "menu-btn") loadMenu();
        if (e.target.id === "contact-btn") loadContact();
        // console.log(e.target)
    }
})
