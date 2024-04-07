<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Servicios de #[em hosting]

    .row.mb-4
      .col-lg-8
        p.mb-4 El servicio de #[em hosting] corresponde a uno de los dos servicios indispensables para la publicación de una aplicación web, y consiste, esencialmente, en un servicio de alojamiento de archivos de los productos y servicios de #[em software] que requieren ser publicados en internet.
        .fondo-color-sistema-k.p-4.borde-10
          p.mb-0 Internet es un gran grupo de servidores interconectados, unos con otros, a los cuales las personas acceden para el consumo de servicios desde sus equipos personales; dentro de esta gran red, hay unos servidores especiales encargados de ofrecer el servicio de #[em hosting].
      .col-lg-4.order-first.order-lg-last 
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/7.png",style="max-width: 398px;")
    
    p.mb-4 Estos son algunos aspectos generales y de mucha importancia que debe tener en cuenta en lo relacionado con los servicios de #[em hosting]:

    p(style="color: red;") ¡¡¡FALTAN TABS!!!

    p.mb-4 Dentro de las modalidades o tipos de #[em hosting], destacan las que se muestran a continuación:

    .slider-personalizado-1.py-5
      img.imgf-1(src="@/assets/curso/temas/10.png")
      img.imgf-2(src="@/assets/curso/temas/12.png")
      img.imgf-3(src="@/assets/curso/temas/11.png")
      .slider-personalizado-1__contenido.p-3.pt-5
        SlyderA(tipo="b")
          .row
            .col-lg-6.ps-lg-5
              .d-flex.flex-column.h-100.justify-content-between
                h4.mb-4 #[em Hosting] compartido
                p Servicio donde el proveedor ofrece alojamiento a varios clientes usando el mismo servidor. Cada cliente tiene un espacio independiente donde guardar sus archivos. Se comparten recursos del servidor como: memoria RAM, CPU, ancho de banda, dirección IP, entre otros. Es el más económico de todos los servicios de #[em hosting], fácil de manejar e instalar; aunque los proyectos alojados en el mismo servidor pueden afectar el rendimiento de los otros y, al tener recursos compartidos, puede haber menor velocidad y disponibilidad.
            .col-lg-6
              figure.mb-4.mb-lg-0.my-auto
                img.mx-auto(src="@/assets/curso/temas/9.png",style="max-width: 491px;")
          .row
            .col-lg-6.ps-lg-5
              .d-flex.flex-column.h-100.justify-content-between
                h4.mb-4 Servidor dedicado
                p Cada cliente tiene uso exclusivo de un servidor. Los recursos no se comparten, el rendimiento es mucho más alto y ofrece mayor seguridad. Hay mayor flexibilidad, ya que todos los recursos del servidor son administrados por un único cliente; sin embargo, esto puede implicar un trabajo adicional, ya que este proceso de administración suele correr por cuenta del mismo cliente. Este tipo de servicio suele ser costoso y, a menudo, su configuración y mantenimiento pueden resultar complicados.
            .col-lg-6
              figure.mb-4.mb-lg-0.my-auto
                img.mx-auto(src="@/assets/curso/temas/13.png",style="max-width: 491px;")
          .row
            .col-lg-6.ps-lg-5
              .d-flex.flex-column.h-100.justify-content-between
                h4.mb-4 VPS (Servidor Privado Virtual)
                p Un servidor físico es particionado virtualmente; estas particiones virtuales tienen asignación independiente de parte de los recursos del servidor y solo comparten, entre sí, el sistema operativo. Cada partición es alquilada a diferentes clientes. Este modelo combina características del #[em hosting] compartido y del servidor dedicado. Los clientes comparten un mismo servidor pero las particiones virtuales tienen recursos independizados, por lo cual no deben compartir memoria, disco duro o procesador. El desempeño y velocidad de acceso de cada cliente es comparable al de un servidor dedicado.
            .col-lg-6
              figure.mb-4.mb-lg-0.my-auto
                img.mx-auto(src="@/assets/curso/temas/14.png",style="max-width: 491px;")
          .row
            .col-lg-6.ps-lg-5
              .d-flex.flex-column.h-100.justify-content-between
                h4.mb-4 #[em Cloud hosting] (servidor en la nube)
                p El #[em hosting] en la nube distribuye los datos de un proyecto entre varios servidores interconectados, mejorando la eficiencia, disponibilidad, tolerancia a fallos, y seguridad en comparación con el #[em hosting] dedicado. Ofrece gran adaptabilidad, permitiendo ajustar los recursos contratados fácilmente según la necesidad y cobrando solo por los recursos utilizados, en lugar de planes fijos. 
            .col-lg-6
              figure.mb-4.mb-lg-0.my-auto
                img.mx-auto(src="@/assets/curso/temas/15.png",style="max-width: 491px;")
          .row
            .col-lg-6.ps-lg-5
              .d-flex.flex-column.h-100.justify-content-between
                h4.mb-4 #[em Hosting] gratuito 
                p Muchos proveedores de #[em hosting] ofrecen acceso gratuito con la esperanza de convertir a estos usuarios en clientes de paquetes de pago en el futuro. Aunque estos servicios gratuitos son útiles para fines educativos, no se recomiendan para proyectos serios debido a que pueden incluir publicidad intrusiva que afecta la imagen del proyecto. Además, suelen presentar limitaciones en almacenamiento, ancho de banda, opciones de respaldo, cantidad de usuarios concurrentes y control sobre la publicidad mostrada, entre otras restricciones.
            .col-lg-6
              figure.mb-4.mb-lg-0.my-auto
                img.mx-auto(src="@/assets/curso/temas/16.png",style="max-width: 491px;")


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
