let micarrusel = {};
let foto = 0;
let total = 0;

micarrusel = [{ imageurl: "img/contacto/1.jpg", titulo: "Foto #1" },
    { imageurl: "img/contacto/2.jpg", titulo: "Foto #2" },
    { imageurl: "img/contacto/3.jpg", titulo: "Foto #3" },
    { imageurl: "img/contacto/4.jpg", titulo: "Foto #4" },
    { imageurl: "img/contacto/5.jpg", titulo: "Foto #5" }
];


let cambiar = function(mas) {
    total = micarrusel.length;
    foto = foto + mas;
    if (foto > total) {
        foto = 1
    }
    if (foto < 1) {
        foto = total;
    }

    document.thumb.src = micarrusel[foto - 1].imageurl;
    titulo = document.getElementById('titulo');
    titulo.innerText = micarrusel[foto - 1].titulo;
}