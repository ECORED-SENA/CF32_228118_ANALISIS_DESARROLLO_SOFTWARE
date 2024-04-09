<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-out")
      .titulo-principal__numero
        span 4
      h1 Publicación y prueba de sitios

    .row.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right")
        p.mb-4 Teniendo en cuenta los elementos vistos a lo largo de este componente formativo: servicios de #[em hosting], servicios de dominio y los protocolos de transferencia de archivos, es momento de comprender y asimilar los pasos para la publicación de un sitio web.
        .fondo-color-sistema-k.borde-10.px-3.py-4
          .row.align-items-center 
            .col-md-2
              figure.mb-4.mb-md-0
                img.mx-auto(src="@/assets/curso/temas/40.png",style="max-width: 82px;")
            .col-md-10
              p.mb-0 A continuación, conozca los pasos para publicar un sitio web. Procure llevar registro de los aspectos más relevantes en su libreta personal de apuntes:
      .col-lg-5.order-first.order-lg-last(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/41.png",style="max-width: 502px;")

    .slider-personalizado-1.py-5.mb-5(data-aos="flip-up")
      img.imgf-1(src="@/assets/curso/temas/10.png")
      img.imgf-2(src="@/assets/curso/temas/12.png")
      img.imgf-3(src="@/assets/curso/temas/11.png")
      .slider-personalizado-1__contenido.p-3.pt-5
        SlyderA(tipo="b")
          .row
            .col-lg-6.ps-lg-5
              .d-flex.flex-column.h-100
                h4.mb-5 Alistamiento
                p Tener listo el sitio web. Se recomienda utilizar servidores de aplicaciones en la máquina local para hacer pruebas. Hay gran variedad de servidores web que se amoldan fácilmente a los sistemas operativos y a los lenguajes de programación utilizados.
            .col-lg-6
              figure.mb-4.mb-lg-0.my-auto
                img.mx-auto(src="@/assets/curso/temas/42.png",style="max-width: 491px;")
          .row
            .col-lg-6.ps-lg-5
              .d-flex.flex-column.h-100
                h4.mb-5 #[em Hosting] apropiado
                p Adquirir servicio de #[em hosting] que cumpla con características necesarias para despliegue del sitio. Los servicios de #[em hosting] ofrecen un conjunto de beneficios entre los que se debe verificar el sistema operativo, el servidor de aplicaciones, sistemas gestores de bases de datos, lenguajes soportados, espacio de disco, límite de ancho de banda, cantidad de cuentas de correo, calidad de soporte, certificados digitales y copias de seguridad.
            .col-lg-6
              figure.mb-4.mb-lg-0.my-auto
                img.mx-auto(src="@/assets/curso/temas/43.png",style="max-width: 491px;")
          .row
            .col-lg-6.ps-lg-5
              .d-flex.flex-column.h-100
                h4.mb-5 Imagen del sitio
                p Adquirir un servicio de dominio que sirva para representar la imagen del sitio, que sea de fácil recordación y utilice los dominios de primer nivel, de acuerdo con las características del sitio a publicar.
            .col-lg-6
              figure.mb-4.mb-lg-0.my-auto
                img.mx-auto(src="@/assets/curso/temas/44.png",style="max-width: 491px;")
          .row
            .col-lg-6.ps-lg-5
              .d-flex.flex-column.h-100
                h4.mb-5 Funcionalidades probadas
                p Una vez desplegado el sitio, verificar que todas las funcionalidades probadas, de manera local, funcionan de la misma forma, una vez que el sitio es montado en Internet. Para evitar inconvenientes, se recomienda utilizar, en las pruebas locales, las mismas características de sistema operativo, servidor de aplicaciones y gestores de bases de datos que el de los servidores de #[em hosting].
            .col-lg-6
              figure.mb-4.mb-lg-0.my-auto
                img.mx-auto(src="@/assets/curso/temas/45.png",style="max-width: 491px;")
    
    .d-flex.align-items-center.mb-5(data-aos="fade-right")
      img.me-4(src="@/assets/curso/temas/25.svg",style="max-width: 85px;")
      p.mb-0 Conozca y profundice en la forma de desplegar un sitio utilizando servicios de #[em hosting] y de dominios gratuitos. Visualice con atención el video “Publicación y prueba sitios”. Procure llevar registro de los aspectos más destacados en su libreta personal de apuntes.

    figure.mb-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/ayD5ImlZ1NA?si=HffdU14ztPOJmPtt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
      figcaption Video. Publicación y prueba de sitios
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
