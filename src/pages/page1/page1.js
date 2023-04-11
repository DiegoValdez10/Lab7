import { crearHeaderConLink } from "../../funciones/headersLink.js";
import { agregarImagen } from "../../funciones/imagenes.js";
import "../page1/page1.scss";

//var link = document.createElement("link");
//link.href = "page1.css";
//link.rel = "stylesheet";
//document.head.appendChild(link);

document.getElementById("header").appendChild(crearHeaderConLink("Laboratorio Webpack", "index.html", "Inicio", "../page2/libros-populares.html", "Libros Populares", "../page3/nuevos-lanzamientos.html", "Nuevos Lanzamientos"));
