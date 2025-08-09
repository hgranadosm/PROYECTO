//funcionalidad de la galeria evento onchange

document.getElementById('menuOpciones').addEventListener('change', galeria);

function galeria () {
    var opciones = document.getElementById('menuOpciones').value;
    switch(opciones){
        case "costarricense":
            document.querySelector('.galeriaCostarricense').style.display = "block"
            document.querySelector('.galeriaItaliana').style.display = "none"
            document.querySelector('.galeriaJaponesa').style.display = "none"
            document.querySelector('.galeriaMexicana').style.display = "none"
            document.querySelector('.galeriaColombiana').style.display = "none"
            break;
        case "italiana":
            document.querySelector('.galeriaCostarricense').style.display = "none"
            document.querySelector('.galeriaItaliana').style.display = "block"
            document.querySelector('.galeriaJaponesa').style.display = "none"
            document.querySelector('.galeriaMexicana').style.display = "none"
            document.querySelector('.galeriaColombiana').style.display = "none"
            break;
        case "japonesa":
            document.querySelector('.galeriaCostarricense').style.display = "none"
            document.querySelector('.galeriaItaliana').style.display = "none"
            document.querySelector('.galeriaJaponesa').style.display = "block"
            document.querySelector('.galeriaMexicana').style.display = "none"
            document.querySelector('.galeriaColombiana').style.display = "none"
            break;
        case "mexicana":
            document.querySelector('.galeriaCostarricense').style.display = "none"
            document.querySelector('.galeriaItaliana').style.display = "none"
            document.querySelector('.galeriaJaponesa').style.display = "none"
            document.querySelector('.galeriaMexicana').style.display = "block"
            document.querySelector('.galeriaColombiana').style.display = "none"
            break;
        case "colombiana":
            document.querySelector('.galeriaCostarricense').style.display = "none"
            document.querySelector('.galeriaItaliana').style.display = "none"
            document.querySelector('.galeriaJaponesa').style.display = "none"
            document.querySelector('.galeriaMexicana').style.display = "none"
            document.querySelector('.galeriaColombiana').style.display = "block"
            break;
        default:
            document.querySelector('.galeriaCostarricense').style.display = "none"
            document.querySelector('.galeriaItaliana').style.display = "none"
            document.querySelector('.galeriaJaponesa').style.display = "none"
            document.querySelector('.galeriaMexicana').style.display = "none"
            document.querySelector('.galeriaColombiana').style.display = "none"
    }
}