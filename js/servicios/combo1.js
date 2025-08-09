window.onload = function() {
    const defaultImg = "img/servicios/default.jpg";
    document.getElementById("output-img").innerHTML = `<img src='${defaultImg}' class='img-fluid rounded' alt='servicio default' />`;
    document.getElementById("output-txt").innerHTML = "";

    const serviciosData = {
        alojamiento: {
            img: "img/servicios/1.jpg",
            txt: "Alojamiento en habitaciones confortables"
        },
        restaurante: {
            img: "img/servicios/2.jpg",
            txt: "Restaurante con comida típica de la región"
        },
        spa: {
            img: "img/servicios/3.jpg",
            txt: "Spa con masajes relajantes"
        },
        excursiones: {
            img: "img/servicios/4.jpg",
            txt: "Excursiones y senderismo guiado"
        },
        jacuzzi: {
            img: "img/servicios/5.jpg",
            txt: "Jacuzzi al aire libre"
        }
    };

    document.getElementById("servicios").onchange = function(e) {
        let key = e.target.value;
        if(serviciosData[key]) {
            let imagen = `<img src='${serviciosData[key].img}' class='img-fluid rounded' alt='servicio' />`;
            document.getElementById("output-img").innerHTML = imagen;
            document.getElementById("output-txt").innerHTML = serviciosData[key].txt;
        } else {
            document.getElementById("output-img").innerHTML = `<img src='${defaultImg}' class='img-fluid rounded' alt='servicio default' />`;
            document.getElementById("output-txt").innerHTML = "";
        }
    };

    document.getElementById("btn-clean").onclick = function(){
        document.getElementById("output-img").innerHTML = `<img src='${defaultImg}' class='img-fluid rounded' alt='servicio default' />`;
        document.getElementById("output-txt").innerHTML = "";
        document.getElementById("servicios").value = "";
    }
}
