function limpiarFiltros() {
    if (precioSelect) precioSelect.value = '';
    if (camaSelect) camaSelect.value = '';
    if (grupoSelect) grupoSelect.value = '';
    if (tipoSelect) tipoSelect.value = '';
    if (vistaSelect) vistaSelect.value = '';
    renderCardsHabitaciones();
}
const habitacionesDB = window.habitacionesDB;

const grupoSelect = document.getElementById('grupoHabitacion');
const tipoSelect = document.getElementById('tipoHabitacion');
const vistaSelect = document.getElementById('vistaHabitacion');
const camaSelect = document.getElementById('camaHabitacion');
const precioSelect = document.getElementById('precioHabitacion');
const imagen = document.getElementById('imagenHabitacion');


document.addEventListener('DOMContentLoaded', renderCardsHabitaciones);
precioSelect && precioSelect.addEventListener('change', renderCardsHabitaciones);
camaSelect && camaSelect.addEventListener('change', renderCardsHabitaciones);
grupoSelect && grupoSelect.addEventListener('change', renderCardsHabitaciones);
tipoSelect && tipoSelect.addEventListener('change', renderCardsHabitaciones);
vistaSelect && vistaSelect.addEventListener('change', renderCardsHabitaciones);


function getFiltrosSeleccionados() {
    return {
        precio: precioSelect && precioSelect.value ? precioSelect.value : null,
        cama: camaSelect && camaSelect.value ? camaSelect.value : null,
        grupo: grupoSelect && grupoSelect.value ? grupoSelect.value : null,
        tipo: tipoSelect && tipoSelect.value ? tipoSelect.value : null,
        vista: vistaSelect && vistaSelect.value ? vistaSelect.value : null
    };
}

function renderCardsHabitaciones() {
    console.log('renderCardsHabitaciones called');
    const contenedor = document.getElementById('cardsHabitaciones');
    if (!contenedor || !window.habitacionesDB) return;
    const filtros = getFiltrosSeleccionados();
    contenedor.innerHTML = '';
    const filtradas = window.habitacionesDB.filter(h => {
        if (filtros.precio && String(h.precio) !== filtros.precio) return false;
        if (filtros.cama && h.cama !== filtros.cama) return false;
        if (filtros.grupo && h.grupo !== filtros.grupo) return false;
        if (filtros.tipo && h.tipo !== filtros.tipo) return false;
        if (filtros.vista && h.vista !== filtros.vista) return false;
        return true;
    });
    if (filtradas.length === 0) {
        contenedor.innerHTML = '<div class="col-12 text-center"><p>No hay habitaciones que coincidan con los filtros seleccionados.</p></div>';
        return;
    }
    filtradas.forEach(h => {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';
        card.innerHTML = `
            <div class="card h-100 shadow-sm">
                <img src="${h.imagen}" class="card-img-top" alt="${h.tipo}" style="height: 220px; object-fit: cover;">
                <div class="card-body text-center">
                    <h5 class="card-title">${tipoLabel(h.tipo)}</h5>
                    <p class="card-text mb-1"><b>Vista:</b> ${vistaLabel(h.vista)}</p>
                    <p class="card-text mb-1"><b>Grupo:</b> ${h.grupo}</p>
                    <p class="card-text mb-1"><b>Cama:</b> ${h.cama}</p>
                    <p class="card-text mb-1"><b>Precio:</b> $${h.precio}</p>
                </div>
            </div>
        `;
        contenedor.appendChild(card);
    });
}


function actualizarImagen() {
    if (!tipoSelect || !vistaSelect || !grupoSelect || !camaSelect || !precioSelect || !imagen) return;
    const tipo = tipoSelect.value;
    const vista = vistaSelect.value;
    const grupo = grupoSelect.value;
    const cama = camaSelect.value;
    const precio = precioSelect.value;
    if (tipo && vista && grupo && cama && precio) {
        const habitacion = habitacionesDB.find(h => h.tipo === tipo && h.vista === vista && h.grupo === grupo && h.cama === cama && String(h.precio) === precio);
        if (habitacion) {
            imagen.src = habitacion.imagen;
            imagen.alt = `${tipoLabel(tipo)} ${vistaLabel(habitacion.vista)} ${habitacion.grupo} ${habitacion.cama} $${habitacion.precio}`;
        }
    }
}

function vistaLabel(vista) {
    switch(vista) {
        case 'jacuzzi': return 'Jacuzzi';
        case 'bosque': return 'Vista al bosque';
        case 'chimenea': return 'Chimenea';
        case 'balcon': return 'Balcón';
        default: return vista;
    }
}

function tipoLabel(tipo) {
    switch(tipo) {
        case 'sencilla': return 'Sencilla';
        case 'doble': return 'Doble';
        case 'suite': return 'Suite';
        case 'tematica': return 'Temática';
        case 'lunaDeMiel': return 'Luna de miel';
        default: return tipo;
    }
}

tipoSelect && tipoSelect.addEventListener('change', actualizarImagen);
vistaSelect && vistaSelect.addEventListener('change', actualizarImagen);
grupoSelect && grupoSelect.addEventListener('change', actualizarImagen);
camaSelect && camaSelect.addEventListener('change', actualizarImagen);
precioSelect && precioSelect.addEventListener('change', actualizarImagen);

function calcularHabitacion() {
    const tipo = tipoSelect.value;
    const vista = vistaSelect.value;
    const grupo = grupoSelect.value;
    const cama = camaSelect.value;
    const precio = precioSelect.value;
    if (!tipo || !vista || !grupo || !cama || !precio) {
        Swal.fire('Por favor seleccione grupo, tipo, vista, tipo de cama y precio de habitación');
        return;
    }
    const habitacion = habitacionesDB.find(h => h.tipo === tipo && h.vista === vista && h.grupo === grupo && h.cama === cama && String(h.precio) === precio);
    if (habitacion) {
        Swal.fire({
            title: 'Habitación seleccionada',
            html: `<b>Grupo:</b> ${habitacion.grupo}<br><b>Tipo:</b> ${tipoLabel(habitacion.tipo)}<br><b>Vista:</b> ${vistaLabel(habitacion.vista)}<br><b>Cama:</b> ${habitacion.cama}<br><b>Precio:</b> $${habitacion.precio}`,
            imageUrl: habitacion.imagen,
            imageWidth: 300,
            imageAlt: `${tipoLabel(habitacion.tipo)} ${vistaLabel(habitacion.vista)} ${habitacion.grupo} ${habitacion.cama} $${habitacion.precio}`
        });
    } else {
        Swal.fire('No se encontró información para la selección.');
    }
}
