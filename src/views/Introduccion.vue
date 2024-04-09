<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.pb-0.pb-md-0
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .fondo-personalizado-1.pos-1
      .fondo-personalizado-1__contenido
        .row.mb-5
          .col-lg-8
            p.mb-4(data-aos="fade-up") Bienvenido al componente de publicación de aplicaciones tradicionales.
            p.mb-5(data-aos="fade-down") El proceso de construcción de #[em software] no concluye con la construcción e integración de los módulos de código fuente, los diseños y los sistemas de persistencia. Estas etapas constituyen apenas el preámbulo de las dos últimas fases del proceso: el despliegue y el mantenimiento del #[em software]. El despliegue implica transferir los productos de #[em software] a un entorno donde puedan ser utilizados libremente por los usuarios finales. Dependiendo de su complejidad, este proceso puede requerir la participación de profesionales especializados en infraestructura.

            .fondo-color-blanco.borde-8.p-3(data-aos="fade-right")
              .row.align-items-center
                .col-md-3
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/2.png",style="max-width: 80px;")
                .col-md-9
                  p.mb-0 En este componente, es esencial abordar de manera responsable los conceptos y procesos estándar para la publicación de una aplicación web, utilizando servicios de terceros. Es recomendable centrar la atención en aspectos clave como servicios de #[em hosting], servicios de dominio, protocolos de transferencia de archivos, pruebas de sitios y otros elementos cruciales, los cuales serán de gran utilidad para enriquecer su proceso de formación.

          .col-lg-4.order-first.order-lg-last(data-aos="fade-left")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/1.png",style="max-width: 401px;")
        
        p.mb-4(data-aos="fade") En el contexto de la publicación de aplicaciones tradicionales, es indispensable enfocarse en tres aspectos para asegurar su éxito y durabilidad:

        .row.justify-content-center
          .col-lg-10
            .fondo-color-primario.p-3.borde-18.mb-4(data-aos="fade-up")
              .row.align-items-center
                .col-sm-2
                  figure.mb-4.mb-sm-0
                    img.mx-auto(src="@/assets/curso/temas/3.png",style="max-width: 72px;")
                .col-sm-10
                  p.mb-0.fw-bold.text-white La seguridad y optimización son pilares fundamentales en la fase final de publicación de aplicaciones.
            .fondo-color-sistema-i.p-3.borde-18.mb-4(data-aos="fade-right")
              .row.align-items-center
                .col-sm-2
                  figure.mb-4.mb-sm-0
                    img.mx-auto(src="@/assets/curso/temas/4.png",style="max-width: 72px;")
                .col-sm-10
                  p.mb-0.fw-bold.text-white Garantizar la protección de datos y asegurar un rendimiento eficiente son prioridades que mejoran significativamente la experiencia del usuario y fomentan la confianza en la aplicación.
            .fondo-color-sistema-j.p-3.borde-18.mb-5(data-aos="fade-down")
              .row.align-items-center
                .col-sm-2
                  figure.mb-4.mb-sm-0
                    img.mx-auto(src="@/assets/curso/temas/5.png",style="max-width: 72px;")
                .col-sm-10
                  p.mb-0.fw-bold.text-white Es crucial realizar pruebas de seguridad exhaustivas y optimizar el rendimiento antes del lanzamiento, además de mantener actualizaciones regulares para enfrentar vulnerabilidades emergentes.


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
