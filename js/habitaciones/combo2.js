window.onload = function() {
    //combo llamado modelo ID usando el evento onchange que se usa en combos dinamicos...
    document.getElementById("modelo").onchange = function(e) {
            //destino del valor seleccionado combo1
            a = e.target.value;

            if (a == "Fronteir") {
                var imagen = "imagenes/fronteir.png";
            } else if (a == "Kicks") {
                var imagen = "imagenes/kicks.png";
            } else if (a == "Sentra") {
                var imagen = "imagenes/sentra.png";
            } else if (a == "Qashqai") {
                var imagen = "imagenes/qashqai.png";
            } else if (a == "Murano") {
                var imagen = "imagenes/nissanMurano.jpg";
            }
            //agrega la imagen del carro modelo 
            document.getElementById("imagen").src = imagen;
        }
        //combo llamado version ID
    document.getElementById("version").onchange = function(es) {
        //destino del valor seleccionado combo2
        n = es.target.value;
    }
}
function calcular() {
    //validacion de los 2 combos
    if (document.getElementById("modelo").value == "Seleccione un modelo:") {
        swal.fire({
            icon: "info",
            title: "Atencion",
            text: "Seleccionar el modelo y la versión del carro",
        });
    }
    if (document.getElementById("version").value == "Seleccione una versión:") {
        swal.fire({
            icon: "info",
            title: "Atencion",
            text: "Seleccionar el modelo y la versión del carro",
        })
    }

    //ciclo switch
    var montoCuota = 0;
    switch (a) {
        case "Fronteir":
            if (n == "4x2")
                montoCuota = 5000;
            else
                montoCuota = 7000;
            break;
        case "Kicks":
            if (n == "4x2")
                montoCuota = 5000;
            else
                montoCuota = 7000;
            break
        case "Sentra":
            if (n == "4x2")
                montoCuota = 5000;
            else
                montoCuota = 7000;
            break;
        case "Qashqai":
            if (n == "4x2")
                montoCuota = 5000;
            else
                montoCuota = 7000;
            break;
         case "Murano":
            if (n == "4x5")
                montoCuota = 6000;
            else
                montoCuota = 7000;
            break;
        default:
            break;
    }

    //variable que almacena la ruta de las imagenes en formato PNG
    let imagenDireccion = "imagenes/" + a.toLowerCase() + ".png";

    //Resultado en desplegable

    swal.fire({
        //la variable imageUrl permite cargar la imagen del carro dentro del desplegabla 
        //a es el target modelo y n es el target de la version del carro
        imageUrl: imagenDireccion,
        html: "<p> Mira la versión del carro " +
            n +  " " + a + 
            "<br><br> <strong>Cuota mensual:</strong></p> " +
            "$" +
            //variable que trae el dato de su monta de cuota mensual
            montoCuota,
        //ancho y altura de la imagen del carro
        imageWidth: 600,
        imageHeight: 250,
        //accesibilidad de la imagen
        imageAlt: "Vehiculo " + a,
    });
}