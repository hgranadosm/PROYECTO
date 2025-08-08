const translations = {
    es: {
        menuInicio: "INICIO",
        menuNosotros: "NOSOTROS",
        menuServicios: "SERVICIOS",
        menuHabitaciones: "HABITACIONES",
        menuContacto: "CONTACTO",
        menuGaleria: "GALERÍA",
        menuResenas: "RESEÑAS",
        hotelTitulo: "HOTEL BRISA DEL BOSQUE",
        fraseEscapada: "Tu <span class='span'>escapada de lujo</span><br> para desconectar <br> y reconectar",
        fraseEscapadaSpan: "escapada de lujo",
        parrafoEscapada: "Hotel Brisa del Bosque es un exclusivo refugio de montaña ubicado en el corazón de la naturaleza costarricense. Rodeado de bosques nublados y aire puro, nuestro hotel ofrece el escenario ideal para una escapada de lujo, descanso y conexión con la tranquilidad del bosque.",
        nuestrosServicios: "Nuestros <span class='span'>Servicios</span>",
        serviciosSpan: "Servicios",
        parrafoServicios: "Tu comodidad y preferencias son nuestra máxima prioridad. Ya sea que busques completa privacidad o desees explorar nuestra lista cuidadosamente seleccionada de experiencias exclusivas, estamos aquí para crear una escapada personalizada que se ajuste perfectamente a tus necesidades..",
        fraseRefugio: "\"Un <span class='span'>refugio privado</span><br>inmerso en la naturaleza.\"",
        refugioSpan: "refugio privado",
        nuestraGaleria: "Nuestra <span class='span'>Galería</span>",
        galeriaSpan: "Galería",
        parrafoGaleria: "Explora nuestra galería para descubrir la belleza y el encanto de Hotel Brisa del Bosque. Desde interiores acogedores hasta paisajes de montaña impresionantes, nuestras fotos muestran las características únicas y los momentos inolvidables que te esperan..",
        dondeEncontrarnos: "Donde <span class='span'>Encontrarnos?</span>",
        encontrarnosSpan: "Encontrarnos?",
        parrafoUbicacion1: "Con un helipuerto cercano a la casa principal y una pista de aterrizaje de césped de 600 m para aeronaves ligeras, Brisa del Bosque Estate es de fácil acceso, aunque se siente como un mundo aparte. Estás a solo un corto trayecto de los principales aeropuertos nacionales.",
        parrafoUbicacion2: "O disfrutá de un espectacular viaje por carretera a través de la majestuosa región montañosa del bosque nuboso costarricense:",
        ubicacionSanJose: "San José: 2 horas",
        ubicacionCartago: "Cartago: 1 hora y 30 minutos",
        ubicacionSantaMaria: "Santa María de Dota: 15 minutos",
        footerFrase: "Una experiencia que <span class='span'><br>nunca olvidarás</span>",
        footerFraseSpan: "<br>nunca olvidarás",
        footerDerechos: "Todos los derechos reservados Hotel Brisa del Bosque"
    },
    en: {
        menuInicio: "HOME",
        menuNosotros: "ABOUT US",
        menuServicios: "SERVICES",
        menuHabitaciones: "ROOMS",
        menuContacto: "CONTACT",
        menuGaleria: "GALLERY",
        menuResenas: "REVIEWS",
        hotelTitulo: "HOTEL BRISA DEL BOSQUE",
        fraseEscapada: "Your <span class='span'>luxury getaway</span><br> to disconnect <br> and reconnect",
        fraseEscapadaSpan: "luxury getaway",
        parrafoEscapada: "Brisa del Bosque Hotel is an exclusive mountain retreat located in the heart of Costa Rican nature. Surrounded by cloud forests and fresh air, our hotel offers the ideal setting for a luxury escape, relaxation, and connection with the tranquility of the forest.",
        nuestrosServicios: "Our <span class='span'>Services</span>",
        serviciosSpan: "Services",
        parrafoServicios: "Your comfort and preferences are our top priority. Whether you seek complete privacy or wish to explore our carefully curated list of exclusive experiences, we are here to create a personalized getaway that perfectly fits your needs.",
        fraseRefugio: "\"A <span class='span'>private refuge</span><br>immersed in nature.\"",
        refugioSpan: "private refuge",
        nuestraGaleria: "Our <span class='span'>Gallery</span>",
        galeriaSpan: "Gallery",
        parrafoGaleria: "Explore our gallery to discover the beauty and charm of Brisa del Bosque Hotel. From cozy interiors to stunning mountain landscapes, our photos showcase the unique features and unforgettable moments that await you.",
        dondeEncontrarnos: "Where <span class='span'>to Find Us?</span>",
        encontrarnosSpan: "to Find Us?",
        parrafoUbicacion1: "With a helipad near the main house and a 600m grass runway for light aircraft, Brisa del Bosque Estate is easily accessible, yet feels like a world apart. You are just a short drive from major national airports.",
        parrafoUbicacion2: "Or enjoy a spectacular road trip through the majestic mountainous region of the Costa Rican cloud forest:",
        ubicacionSanJose: "San José: 2 hours",
        ubicacionCartago: "Cartago: 1 hour and 30 minutes",
        ubicacionSantaMaria: "Santa María de Dota: 15 minutes",
        footerFrase: "An experience you <span class='span'><br>will never forget</span>",
        footerFraseSpan: "<br>will never forget",
        footerDerechos: "All rights reserved Brisa del Bosque Hotel"
    }
};

function changeLanguage() {
    const lang = document.documentElement.lang === 'es' ? 'en' : 'es';
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.innerHTML = translations[lang][key];
    });
}
