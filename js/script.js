
document.addEventListener("DOMContentLoaded", function() {
const parrafoClickeable = document.getElementById("pClick");
const modal = document.getElementById("miModal");
const cerrarModal = document.getElementById("cerrarModal");

parrafoClickeable.addEventListener("click", function() {
    modal.style.display = "block";
});

cerrarModal.addEventListener("click", function() {
    modal.style.display = "none";
});
});
const paises = [
    "Andorra", "Antigua y Barbuda",  "Argentina", "Bahamas", "Barbados", "Belice", "Bolivia",
    "Brasil", "Canadá", "Chile", "Colombia", "Costa Rica", "Cuba", "Dominica",
    "Ecuador", "El Salvador","España",  "Estados Unidos", "Granada", "Guatemala", "Guyana",
    "Haití", "Honduras", "Jamaica", "México", "Nicaragua", "Panamá", "Paraguay",
    "Perú", "República Dominicana", "San Cristóbal y Nieves", "San Vicente y las Granadinas",
    "Santa Lucía", "Surinam", "Trinidad y Tobago", "Uruguay", "Venezuela"
   
];

function autocompletarPais() {
    const input = document.getElementById("pais");
    const sugerenciasContainer = document.getElementById("sugerencias");
    const filtro = input.value.toLowerCase();

    sugerenciasContainer.innerHTML = "";

    const sugerencias = paises.filter(pais => pais.toLowerCase().startsWith(filtro));

    sugerencias.forEach(sugerencia => {
        const suggestionElement = document.createElement("div");
        suggestionElement.textContent = sugerencia;
        suggestionElement.classList.add("sugerencia");

        suggestionElement.addEventListener("click", () => {
            input.value = sugerencia;
            sugerenciasContainer.innerHTML = "";
        });

        sugerenciasContainer.appendChild(suggestionElement);
    });
}



var currentPage = window.location.pathname.split('/').pop().replace('.html', '');

document.querySelectorAll('.nav-link').forEach(function(link) {
    link.classList.remove('active');
});


if (currentPage === 'index') {
    document.querySelector('.perfil-link').classList.add('active');
} else if (currentPage === 'formacion') {
    document.querySelector('.formacion-link').classList.add('active');
} else if (currentPage === 'experiencia') {
    document.querySelector('.experiencia-link').classList.add('active');
} else if (currentPage === 'contacto') {
    document.querySelector('.contacto-link').classList.add('active');
}

document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").classList.toggle("nav-links-responsive")
        }
        );
        
               
        function enviarFormulario() {
            const nombre = document.getElementById("nombre").value;
            const email = document.getElementById("email").value;
            const mensaje = document.getElementById("mensaje").value;
            const pais = document.getElementById("pais").value;
        
            const nombreError = document.getElementById("nombreError");
            const emailError = document.getElementById("emailError");
            const mensajeError = document.getElementById("mensajeError");
            const paisError = document.getElementById("paisError");
        
            // Validar nombre
            if (nombre === "") {
                nombreError.textContent = "El nombre es obligatorio";
                alert("Llena todos los campos correctamente");
                return;
            } else {
                nombreError.textContent = "";
            }
        
            // Validar email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.match(emailRegex)) {
                emailError.textContent = "Ingrese un correo válido";
                alert("Llena todos los campos correctamente");
                return;
            } else {
                emailError.textContent = "";
            }
        
            // Validar mensaje
            if (mensaje === "") {
                mensajeError.textContent = "El mensaje es obligatorio";
                alert("Llena todos los campos correctamente");
                return;
            } else {
                mensajeError.textContent = "";
            }
        
            // Validar país
            if (pais === "") {
                paisError.textContent = "El país es obligatorio";
                alert("Llena todos los campos correctamente");
                return;
            } else {
                paisError.textContent = "";
            }
        
            // Si todo es válido, puedes enviar el formulario aquí o realizar alguna acción adicional
            alert("Formulario enviado con éxito!");
        };


      
        
        
 

function showAlertS() {
    const paginaActual = obtenerPaginaActual();

    function obtenerPaginaActual() {
        const rutaActual = window.location.pathname;
        return rutaActual.substring(rutaActual.lastIndexOf("/") + 1);
    }
    
        switch (paginaActual) { 
            case "index.html":
                window.location.href = "formacion.html";
                break;

            case "formacion.html":
                window.location.href = "experiencia.html";
                break;

            case "experiencia.html":
                window.location.href = "contacto.html";
                break;

            default:
                break;
        }
    
};


function showAlertA() {
    const paginaActual = obtenerPaginaActual();

    function obtenerPaginaActual() {
        const rutaActual = window.location.pathname;
        return rutaActual.substring(rutaActual.lastIndexOf("/") + 1);
    }


    
        switch (paginaActual) { 
            case "formacion.html":
                window.location.href = "index.html";
                break;

            case "experiencia.html":
                window.location.href = "formacion.html";
                break;

            case "contacto.html":
                window.location.href = "experiencia.html";
                break;

            default:
                break;
        }
    
};


