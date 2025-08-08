window.onload = function() {
    const inputBusqueda = document.getElementById('searchInput');
    if (inputBusqueda) {
        inputBusqueda.addEventListener('keypress', validarEnterServicio);
        inputBusqueda.addEventListener('input', filtrarServiciosTira);
    }
// Filtrado en tiempo real de servicios/amenidades en el carrusel
function filtrarServiciosTira() {
    var searchValue = document.getElementById('searchInput').value.toLowerCase();
    var serviciosTira = document.getElementById('servicios-tira');
    if (!serviciosTira) return;
    var items = serviciosTira.getElementsByClassName('item');
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var texto = item.textContent.toLowerCase();
        if (texto.includes(searchValue)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    }
}
};

function validarEnterServicio(event) {
    if (event.key === 'Enter') {
        searchServicios();
    }
}

function searchServicios() {
    let searchInput = document.getElementById("searchInput").value.toLowerCase();
    let servicios = [
        {
            nombre: "WiFi Gratis",
            descripcion: "Internet de alta velocidad en todas las habitaciones.",
            icono: "fa-solid fa-wifi"
        },
        {
            nombre: "Ducha Privada",
            descripcion: "Baño privado con agua caliente.",
            icono: "fa-solid fa-shower"
        },
        {
            nombre: "TV Satelital",
            descripcion: "Televisión con canales internacionales.",
            icono: "fa-solid fa-tv"
        },
        {
            nombre: "Camas cómodas",
            descripcion: "Colchones premium para tu descanso.",
            icono: "fa-solid fa-bed"
        },
        {
            nombre: "Desayuno incluido",
            descripcion: "Desayuno continental cada mañana.",
            icono: "fa-solid fa-mug-hot"
        },
        {
            nombre: "Parqueo",
            descripcion: "Estacionamiento privado y seguro.",
            icono: "fa-solid fa-car"
        }
    ];

    let filteredServicios = servicios.filter(servicio =>
        servicio.nombre.toLowerCase().includes(searchInput) ||
        servicio.descripcion.toLowerCase().includes(searchInput)
    );

    displayServicios(filteredServicios);
}

function displayServicios(servicios) {
    let resultsContainer = document.getElementById("pResult");
    resultsContainer.innerHTML = "";
    if (servicios.length === 0) {
        resultsContainer.innerHTML = "<p>No se encontraron servicios para la búsqueda escrita.</p>";
    } else {
        for (let i = 0; i < servicios.length; i++) {
            let card = document.createElement("div");
            card.className = "card mb-3";
            card.style.maxWidth = "100%";
            card.innerHTML = `
                <div class='row g-0 align-items-center'>
                    <div class='col-md-4 text-center'>
                        <i class='${servicios[i].icono}' style='font-size: 4rem; color: #1976d2;'></i>
                    </div>
                    <div class='col-md-8'>
                        <div class='card-body'>
                            <h5 class='card-title'>${servicios[i].nombre}</h5>
                            <p class='card-text'>${servicios[i].descripcion}</p>
                        </div>
                    </div>
                </div>
            `;
            resultsContainer.appendChild(card);
        }
    }
}