// Crear el cliente de Supabase usando la versión UMD (sin import)
const supabase = window.supabase.createClient(
    "https://bkiqjtkqnnvhmerirogw.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJraXFqdGtxbm52aG1lcmlyb2d3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg3MDg3MDYsImV4cCI6MjA1NDI4NDcwNn0.ogl00JDOg_avC_9KItXT5hpXQa2DO45TzVKteAEGk9g"
);

let productos = []; // Variable global para almacenar los productos

async function probarConexion() {
    console.log("Probando conexión a Supabase...");

    // Intenta obtener datos de la tabla tblProducto
    const { data, error } = await supabase.from("tblProducto").select("*");

    if (error) {
        console.error("Error conectando a Supabase:", error);
    } else {
        console.log("Conexión exitosa. Datos obtenidos:", data);
        productos = data; // Almacenar los productos en la variable global
        mostrarProductos(productos); // Mostrar todos los productos al cargar la página
    }
}

function mostrarProductos(productos) {
    const contenedor = document.getElementById("producto");
    contenedor.innerHTML = ""; // Limpiar antes de agregar

    // Verificar si hay productos
    if (productos.length === 0) {
        contenedor.innerHTML = "<p>No hay productos disponibles.</p>";
        return;
    }

    // Mostrar los productos en el contenedor
    productos.forEach(producto => {
        const productoHTML = `
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <img src="${producto.imagen}" class="card-img-top" alt="${producto.referencia}">
                    <div class="card-body">
                        <h5 class="card-title">${producto.descripcion}</h5>
                        <p class="card-text"><strong>Precio:</strong> $${producto.precio}</p>
                    </div>
                </div>
            </div>
        `;
        contenedor.innerHTML += productoHTML;
    });
}

// Función para filtrar productos por referencia
function mostrarLocionesPorReferencia(referencia) {
    const productosFiltrados = productos.filter(producto => producto.referencia === referencia);
    mostrarProductos(productosFiltrados);
}

// Función para mostrar todos los productos
function cargarTodasLasLociones() {
    mostrarProductos(productos);
}

// Ejecuta la prueba al cargar la página
document.addEventListener("DOMContentLoaded", probarConexion);