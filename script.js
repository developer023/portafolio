document.addEventListener('DOMContentLoaded', function () {
    // Configuración del carrusel para los servicios
    var swiperServices = new Swiper('.services .swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        spaceBetween: 10, // Espacio entre las imágenes
        breakpoints: {
            // cuando la ventana sea >= 1024px
            1024: {
                slidesPerView: 3, // Muestra 3 imágenes a la vez
            },
            // cuando la ventana sea >= 768px
            768: {
                slidesPerView: 2, // Muestra 2 imágenes a la vez
            },
            // cuando la ventana sea < 768px
            0: {
                slidesPerView: 1, // Muestra 1 imagen a la vez
            },
        }
    });

    // Configuración del carrusel para los empleados
    var swiperEmployees = new Swiper('.employees .swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        spaceBetween: 10, // Espacio entre las imágenes
        breakpoints: {
            1024: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        }
    });
});
