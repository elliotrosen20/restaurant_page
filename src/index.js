import { loadPage } from "./pageLoad.js";
import { loadMenu } from "./menuTab.js";
import { loadAbout } from "./aboutTab.js"

document.addEventListener("DOMContentLoaded", () => {
    loadPage();
})
const mainContent = document.querySelector("#content");
const navButtons = document.querySelectorAll('nav button');

navButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        mainContent.innerHTML = ""
        const buttonText = event.target.textContent;
        switch (buttonText) {
            case "Home":
                loadPage();
                break;
            case "Menu":
                loadMenu();
                break;
            case "About":
                loadAbout();
                break;
            default:
                loadPage();
        }
    })
})