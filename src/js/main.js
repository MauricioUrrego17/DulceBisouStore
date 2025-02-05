// Datos de ejemplo (en el futuro vendrán de Supabase)
const lociones = [
    { referencia: "Hugo Boss", nombre: "Hugo Boss XY", imagen: "Hugo-boss-xy.jpg" },
    { referencia: "Hugo Boss", nombre: "Hugo Boss Red", imagen: "Hugo-boss-xy.jpg" },
    { referencia: "Chanel", nombre: "Chanel N°5", imagen: "chanel-no5.jpg" },
    { referencia: "Chanel", nombre: "Chanel Coco Mademoiselle", imagen: "chanel-no5.jpg" },
    { referencia: "Lacoste", nombre: "Lacoste L.12.12", imagen: "lacoste-l12.jpg" },
    { referencia: "Lacoste", nombre: "Lacoste Essential", imagen: "lacoste-l12.jpg" },
];
// Función para mostrar lociones por referencia
function mostrarLocionesPorReferencia(referencia) {
    const catalogoContainer = document.getElementById("catalogo-container");
    catalogoContainer.innerHTML = ""; // Limpiar el contenedor
    // Filtrar lociones por referencia
    const locionesFiltradas = lociones.filter((locion) => locion.referencia === referencia);
    // Mostrar las lociones filtradas
    locionesFiltradas.forEach((locion) => {
        const col = document.createElement("div");
        col.className = "col-md-4 mb-4";
        const card = document.createElement("div");
        card.className = "card";
        const img = document.createElement("img");
        img.src = `../img/${locion.imagen}`;
        img.className = "card-img-top";
        img.alt = locion.nombre;
        const cardBody = document.createElement("div");
        cardBody.className = "card-body";
        const title = document.createElement("h5");
        title.className = "card-title";
        title.textContent = locion.nombre;
        const referenciaText = document.createElement("p");
        referenciaText.className = "card-text";
        referenciaText.textContent = `Referencia: ${locion.referencia}`;
        cardBody.appendChild(title);
        cardBody.appendChild(referenciaText);
        card.appendChild(img);
        card.appendChild(cardBody);
        col.appendChild(card);
        catalogoContainer.appendChild(col);
    });
}
// Función para cargar todas las lociones
function cargarTodasLasLociones() {
    const catalogoContainer = document.getElementById("catalogo-container");
    catalogoContainer.innerHTML = ""; // Limpiar el contenedor
    // Mostrar todas las lociones
    lociones.forEach((locion) => {
        const col = document.createElement("div");
        col.className = "col-md-4 mb-4";
        const card = document.createElement("div");
        card.className = "card";
        const img = document.createElement("img");
        img.src = `../img/${locion.imagen}`;
        img.className = "card-img-top";
        img.alt = locion.nombre;
        const cardBody = document.createElement("div");
        cardBody.className = "card-body";
        const title = document.createElement("h5");
        title.className = "card-title";
        title.textContent = locion.nombre;
        const referenciaText = document.createElement("p");
        referenciaText.className = "card-text";
        referenciaText.textContent = `Referencia: ${locion.referencia}`;
        cardBody.appendChild(title);
        cardBody.appendChild(referenciaText);
        card.appendChild(img);
        card.appendChild(cardBody);
        col.appendChild(card);
        catalogoContainer.appendChild(col);
    });
}
// Ejecutar la función al cargar la página
document.addEventListener("DOMContentLoaded", cargarTodasLasLociones);