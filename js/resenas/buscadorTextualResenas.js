window.onload = function() {
	const inputBusqueda = document.getElementById('searchResenaInput');
	if (inputBusqueda) {
		inputBusqueda.addEventListener('keypress', validarEnterResena);
		inputBusqueda.addEventListener('input', filtrarResenasTestimoniales);
	}
}

function validarEnterResena(event) {
	if (event.key === 'Enter') {
		filtrarResenasTestimoniales();
	}
}

function filtrarResenasTestimoniales() {
	const searchInput = document.getElementById('searchResenaInput').value.toLowerCase();
	const testimonials = document.querySelectorAll('.testimonials_container .testimonials .item');
	let found = false;
	testimonials.forEach(item => {
		const nombreElem = item.querySelector('h3');
		if (!nombreElem) return;
		const nombre = nombreElem.textContent.trim().toLowerCase();
		if (nombre.includes(searchInput)) {
			item.style.display = '';
			found = true;
		} else {
			item.style.display = 'none';
		}
	});
	let resultsContainer = document.getElementById("pResenaResult");
	if (resultsContainer) {
		if (!found && searchInput) {
			resultsContainer.innerHTML = "<p>No se encontraron reseñas para ese nombre.</p>";
		} else {
			resultsContainer.innerHTML = "";
		}
	}
}

function validarEnterResena(event) {
	if (event.key === 'Enter') {
		searchResenas();
	}
}

function searchResenas() {
	let searchInput = document.getElementById("searchResenaInput").value.toLowerCase();
	let resenas = [
		{
			nombre: "Mariana Solís",
			texto: "Un lugar mágico. El aire fresco y la atención del personal hicieron que nuestra escapada..."
		},
		{
			nombre: "Andrés Cordero",
			texto: "Despertar con vista al bosque fue inolvidable. El desayuno casero, simplemente..."
		},
		{
			nombre: "Laura Méndez",
			texto: "El spa es un verdadero oasis. Salí completamente renovada y relajada."
		},
		{
			nombre: "Carlos Ramírez",
			texto: "Cada rincón del hotel está cuidado con detalle. Me sentí como en casa, pero en medio de la naturaleza."
		},
		{
			nombre: "Valeria Jiménez",
			texto: "La mejor experiencia en familia. Volveremos pronto."
		}
	];

	let filteredResenas = resenas.filter(resena =>
		resena.nombre.toLowerCase().includes(searchInput)
	);

	displayResenas(filteredResenas);
}

function filtrarResenas() {
	searchResenas();
}

function displayResenas(resenas) {
	let resultsContainer = document.getElementById("pResenaResult");
	resultsContainer.innerHTML = "";
	if (resenas.length === 0) {
		resultsContainer.innerHTML = "<p>No se encontraron reseñas para ese nombre.</p>";
	} else {
		for (let i = 0; i < resenas.length; i++) {
			let card = document.createElement("div");
			card.className = "card mb-3";
			card.style.maxWidth = "100%";
			card.innerHTML = `
				<div class='card-body'>
					<h5 class='card-title'>${resenas[i].nombre}</h5>
					<p class='card-text'>${resenas[i].texto}</p>
				</div>
			`;
			resultsContainer.appendChild(card);
		}
	}
}
