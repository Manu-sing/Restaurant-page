import header from './header';
import homePage from './homePage';
import menuPage from './menuPage';
import contactPage from './contactPage';
import './style.css';

header();
const container = document.getElementById("content");
container.id = "container";
homePage(container);

const homeButton = document.getElementById("button1");
homeButton.addEventListener("click", () => {
    container.innerHTML = "";
    homePage(container);
   
})

const menuButton = document.getElementById("button2");
menuButton.addEventListener("click", () => {
    container.innerHTML = "";
    menuPage(container);
    
})

const contactButton = document.getElementById("button3");
contactButton.addEventListener("click", () => {
    container.innerHTML = "";
    contactPage(container);
    
})