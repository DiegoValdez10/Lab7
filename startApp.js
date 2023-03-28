import { newEncabezado } from "../modularidad/encabezado.js"
import { styleSheet } from "../Modularidad/link.js";


export const indexApp = () => {
    document.getElementById('header').appendChild(newEncabezado('Menu principal', 'Libros populares', 'Nuevos libros', '../populares/libros-populares.html', '../lanzamientos/nuevos-lanzamientos.html'));
    document.head.appendChild(styleSheet('../index/index.css'));
};

