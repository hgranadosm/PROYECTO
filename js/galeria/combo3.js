function menu () {
    let seleccion = document.getElementById('opciones').value;

    switch (seleccion) {
        case 'A':
            Swal.fire({
                icon: "success",
                title: '',
                html: `<div style="background-color: transparent; color: #333; border-radius: 8px; padding: 18px; text-align: center; font-size: 1rem; font-weight: 500;">
                        <h3 style='font-size:1.3rem; font-weight:600; margin-bottom:18px;'>Instalaciones</h3>
                        <span style='display:block; margin-bottom:12px;'>Un momento porfavor...</span>
                    </div>`,
                background: '#f1ebe3',
                color: '#333',
                customClass: {
                    popup: 'swal2-custom-popup',
                    title: 'swal2-custom-title',
                    htmlContainer: 'swal2-custom-html',
                    confirmButton: 'swal2-custom-confirm',
                },
                showConfirmButton: false,
                timer: 2000,
            }).then (()=> {
                window.location.href = "galeriaInstalaciones.html";
            });
            return;
         case 'B':
            Swal.fire({
                icon: "success",
                title: '',
                html: `<div style="background-color: transparent; color: #333; border-radius: 8px; padding: 18px; text-align: center; font-size: 1rem; font-weight: 500;">
                        <h3 style='font-size:1.3rem; font-weight:600; margin-bottom:18px;'>Spa y bienestar</h3>
                        <span style='display:block; margin-bottom:12px;'>Un momento porfavor...</span>
                    </div>`,
                background: '#f1ebe3',
                color: '#333',
                customClass: {
                    popup: 'swal2-custom-popup',
                    title: 'swal2-custom-title',
                    htmlContainer: 'swal2-custom-html',
                    confirmButton: 'swal2-custom-confirm',
                },
                showConfirmButton: false,
                timer: 2000,
            }).then (()=> {
                window.location.href = "galeriaSpa.html";
            });
            return;
         case 'C':
            Swal.fire({
                icon: "success",
                title: '',
                html: `<div style="background-color: transparent; color: #333; border-radius: 8px; padding: 18px; text-align: center; font-size: 1rem; font-weight: 500;">
                        <h3 style='font-size:1.3rem; font-weight:600; margin-bottom:18px;'>Restaurante y gastronomía</h3>
                        <span style='display:block; margin-bottom:12px;'>Un momento porfavor...</span>
                    </div>`,
                background: '#f1ebe3',
                color: '#333',
                customClass: {
                    popup: 'swal2-custom-popup',
                    title: 'swal2-custom-title',
                    htmlContainer: 'swal2-custom-html',
                    confirmButton: 'swal2-custom-confirm',
                },
                showConfirmButton: false,
                timer: 2000,
            }).then (()=> {
                window.location.href = "galeriaRestaurante.html";
            });
            return;
          case 'D':
            Swal.fire({
                icon: "success",
                title: '',
                html: `<div style="background-color: transparent; color: #333; border-radius: 8px; padding: 18px; text-align: center; font-size: 1rem; font-weight: 500;">
                        <h3 style='font-size:1.3rem; font-weight:600; margin-bottom:18px;'>Eventos especiales</h3>
                        <span style='display:block; margin-bottom:12px;'>Un momento porfavor...</span>
                    </div>`,
                background: '#f1ebe3',
                color: '#333',
                customClass: {
                    popup: 'swal2-custom-popup',
                    title: 'swal2-custom-title',
                    htmlContainer: 'swal2-custom-html',
                    confirmButton: 'swal2-custom-confirm',
                },
                showConfirmButton: false,
                timer: 2000,
            }).then (()=> {
                window.location.href = "galeriaEventos.html";
            });
            return;
    }
}