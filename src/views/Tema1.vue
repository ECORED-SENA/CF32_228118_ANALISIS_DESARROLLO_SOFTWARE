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

    TabsC.tabs-personalizado-1
      .fondo-personalizado-5(titulo="The splendor of the mystery")
        .fondo-personalizado-5__contenido
          .row
            .col-lg-5
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/47.png",style="max-width: 502px;")
            .col-lg-7
              h4.mb-4 Funcionamiento del servicio #[em hosting]
              p.mb-0 El servicio de #[em hosting] funciona de manera similar al arrendamiento de inmuebles. En ambos contextos, se realiza el pago de un alquiler que otorga la autorización para utilizar un espacio. En el caso del #[em hosting], este espacio se utiliza para alojar contenido digital. 
      .fondo-personalizado-5(titulo="The splendor of the mystery")
        .fondo-personalizado-5__contenido
          .row
            .col-lg-5
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/47.png",style="max-width: 502px;")
            .col-lg-7
              h4.mb-4 Funcionamiento del servicio #[em hosting]
              p.mb-0 El servicio de #[em hosting] funciona de manera similar al arrendamiento de inmuebles. En ambos contextos, se realiza el pago de un alquiler que otorga la autorización para utilizar un espacio. En el caso del #[em hosting], este espacio se utiliza para alojar contenido digital. 


    p.mb-4 Dentro de las modalidades o tipos de #[em hosting], destacan las que se muestran a continuación:

    .slider-personalizado-1.py-5.mb-5
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
    
    p.mb-4 #[b La selección de un servicio de #[em hosting]], no es una decisión que se deba tomar a la ligera; puede impactar positiva o negativamente la perspectiva final de los clientes de un producto #[em software] desarrollado. Una mala decisión, en este aspecto, puede borrar todas las buenas prácticas de calidad, diseño y construcción de #[em software] utilizadas.

    p.mb-4 Para elegir un servicio de #[em hosting] se debe considerar:

    .fondo-personalizado-2.p-3.pb-0.pt-5.mb-5
      .row.align-items-center
        .col-lg-4
          figure.mb-4.mb-lg-0
            img.mx-auto(src="@/assets/curso/temas/21.png",style="max-width: 358px;")
        .col-lg-8
          SlyderF.slider-personalizado-2.mb-3(columnas="col-lg-6")
            .tarjeta.color-primario.borde-16.p-3
              figure.mb-2
                img.mx-auto(src="@/assets/curso/temas/17.png",style="max-width: 86px;")
              p.mb-0.text-white.text-center Opiniones de clientes del servicio y puntos de atención al cliente existentes y sus horarios, esperando siempre una disponibilidad de 24 horas, los 7 días de la semana.
            .tarjeta.color-primario.borde-16.p-3
              figure.mb-2
                img.mx-auto(src="@/assets/curso/temas/18.png",style="max-width: 86px;")
              p.mb-0.text-white.text-center Tipo de proveedor, es decir, si es nacional o internacional, pero principalmente, la ubicación de los #[em datacenters], buscando que estén ubicados lo más cerca posible de la ubicación de los clientes.
            .tarjeta.color-primario.borde-16.p-3
              figure.mb-2
                img.mx-auto(src="@/assets/curso/temas/19.png",style="max-width: 86px;")
              p.mb-0.text-white.text-center Verificación del #[em uptime], el cual es una medida que hace referencia al tiempo en el que un sitio está disponible en Internet para que pueda ser accedido.
            .tarjeta.color-primario.borde-16.p-3
              figure.mb-2
                img.mx-auto(src="@/assets/curso/temas/20.png",style="max-width: 86px;")
              p.mb-0.text-white.text-center Métodos de pago habilitados y precios.

    .row.align-items-center.mb-4
      .col-lg-8
        p.mb-4 Cada proveedor de servicio de #[em hosting] debe hacer público el valor del #[em uptime] ofrecido a sus clientes dentro de los términos y condiciones de los servicios alquilados.

        .fondo-color-sistema-k.p-3.borde-10
          .row.align-items-center
            .col-md-2
              figure.mb-4.mb-md-0
                img.mx-auto(src="@/assets/curso/temas/23.png",style="max-width: 67px;")
            .col-md-10
              p.mb-0 #[b Proveedores de servicios:] estos son algunos de los proveedores de servicios más conocidos, con los valores de #[em uptime] ofrecidos:

      .col-lg-4.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/24.png",style="max-width: 400px;")

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-sistema-l
          p.mb-0 #[b Tabla 1.] Proveedores de #[em hosting]

        .tabla-a.color-sistema-l
          table
            thead
              tr
                th Proveedor
                th #[em Uptime]
            tbody
              tr
                td GoDaddy MX
                td.text-center 99.9%
              tr
                td A2 #[em Hosting]
                td.text-center 99.99%
              tr
                td TMD #[em Hosting]
                td.text-center 99.99% en #[em hosting] compartido, y 99.9999% en VPS y #[em cloud hosting]
              tr
                td Siteground #[em Hosting] LATAM
                td.text-center 99.99%
              tr
                td Wix
                td.text-center 99.8%
              tr
                td Amazon EC2/EBS
                td.text-center 99.95%
              tr
                td Google Compute Engine
                td.text-center 99.5%
              tr
                td Hostgator
                td.text-center 99.99%

    p.mb-4 #[b Herramientas de monitoreo:] estas son algunas herramientas que pueden ser utilizadas para monitorear una web, el servicio de #[em hosting] y los valores #[em uptime] reales:

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-sistema-l
          p.mb-0 #[b Tabla 2.] Herramientas de monitoreo web

        .tabla-a.color-sistema-l
          table
            thead
              tr
                th.text-start Proveedor
                th.text-start Dirección
            tbody
              tr
                td Pingdom Free
                td https://www.pingdom.com/website-monitoring/
              tr
                td StatusCake Community
                td https://app.statuscake.com/Try/?Plan=FREE
              tr
                td RapidSpike Basic
                td https://www.rapidspike.com/free-30-day-trial/
              tr
                td UptimeRobot
                td https://uptimerobot.com/signUp
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
