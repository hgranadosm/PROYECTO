document.addEventListener('DOMContentLoaded', function() {
	const comboPaisaje = document.getElementById('comboPaisaje');
	const comboHorario = document.getElementById('comboHorario');

	let imgContainer = document.getElementById('paisaje-img-container');
	if (!imgContainer) {
		imgContainer = document.createElement('div');
		imgContainer.id = 'paisaje-img-container';
		imgContainer.style.textAlign = 'center';
		imgContainer.style.margin = '24px 0';
		comboHorario.parentElement.parentElement.parentElement.appendChild(imgContainer);
	}

	function mostrarImagen() {
		const categoria = comboPaisaje.value;
		const horario = comboHorario.value;
		imgContainer.innerHTML = '';
		if (!categoria || !horario) {
			const img = document.createElement('img');
			img.src = 'img/montañafondo.jpg';
			img.alt = 'Imagen por defecto';
			img.style.maxWidth = '420px';
			img.style.width = '500px';
			img.style.borderRadius = '12px';
            img.style.height = '300px';
            
			img.style.boxShadow = '0 4px 16px rgba(51,51,51,0.12)';
			imgContainer.appendChild(img);
			return;
		}
		const paisaje = window.paisajesDB.find(p => p.categoria === categoria);
		if (paisaje && paisaje.imagenes[horario]) {
			const img = document.createElement('img');
			img.src = paisaje.imagenes[horario];
			img.alt = `${categoria} - ${horario}`;
			img.style.maxWidth = '420px';
			img.style.width = '500px';
			img.style.borderRadius = '12px';
            img.style.height = '300px';
			img.style.boxShadow = '0 4px 16px rgba(51,51,51,0.12)';
			imgContainer.appendChild(img);
		}
	}

	mostrarImagen();

	comboPaisaje.addEventListener('change', mostrarImagen);
	comboHorario.addEventListener('change', mostrarImagen);
});
