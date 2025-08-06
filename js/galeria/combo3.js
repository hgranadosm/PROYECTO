function menu () {
    let seleccion = document.getElementById('opciones').value;

    switch (seleccion) {
        case 'A':
            Swal.fire({
                icon: "success",
                title: "Instalaciones",
                text: "Un momento porfavor...",
                showConfirmButton: false,
                timer: 2000,
            }).then (()=> {
                window.location.href = "galeriaInstalaciones.html";
            });
            return;
            //window.open("retrato.html","_self");
         case 'B':
            Swal.fire({
                icon: "success",
                title: "Spa y bienestar",
                text: "Un momento porfavor...",
                showConfirmButton: false,
                timer: 2000,
            }).then (()=> {
                window.location.href = "galeriaSpa.html";
            });
            return;
            //window.open("boda.html","_self");
         case 'C':
            Swal.fire({
                icon: "success",
                title: "Restaurante y gastronomía",
                text: "Un momento porfavor...",
                showConfirmButton: false,
                timer: 2000,
            }).then (()=> {
                window.location.href = "galeriaRestaurante.html";
            });
            return;
            //window.open("paisaje.html","_self"); 
          case 'D':
            Swal.fire({
                icon: "success",
                title: "Eventos especiales",
                text: "Un momento porfavor...",
                showConfirmButton: false,
                timer: 2000,
            }).then (()=> {
                window.location.href = "galeriaEventos.html";
            });
            return;
            //window.open("paisaje.html","_self");          
    }
}