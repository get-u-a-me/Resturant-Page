import "./css/styles.css";
import "./css/home.css";
import "./css/menu.css";
import loadHome from "./scripts/home";
import loadmenu from "./scripts/menu";

loadHome();
document.getElementById("home-btn").addEventListener("click", loadHome);

document.getElementById("menu-btn").addEventListener("click", loadmenu);
