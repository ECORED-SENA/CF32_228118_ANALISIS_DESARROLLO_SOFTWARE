<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-0.pb-md-0
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Servicios de dominio

    .row.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right")
        p.mb-4 El dominio es el segundo elemento clave en el momento de publicar una aplicación o servicio web, consistiendo en un nombre único que permite localizar todos los servicios web en internet. En la red, cada elemento posee una dirección IP, que es un conjunto de números mediante el cual puede ser ubicado.
        p.mb-4 Dado que la dirección IP puede ser difícil de recordar para la mayoría de las personas, resulta indispensable vincularla con un nombre que facilite el acceso a usuarios y clientes. Este nombre es lo que se conoce como dominio.

        .d-flex.align-items-center
          img.me-4(src="@/assets/curso/temas/25.svg",style="max-width: 85px;")
          p.mb-0 En el siguiente recurso, profundice en los aspectos y generalidades más importantes de los servicios de dominio:
      .col-lg-5.order-first.order-lg-last(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/26.png",style="max-width: 502px;")

    figure.mb-5(data-aos="zoom-in-out")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/uzf8RW-GvTw?si=RTJgnaYau1Wci9FU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
      figcaption Video. Publicación de aplicaciones tradicionales: introducción

    .row.mb-5 
      .col-lg-6(data-aos="fade-right")
        p.mb-0.mb-4.mb-lg-0 Generalmente, los servicios de #[em hosting] y de dominio son ofrecidos por las mismas compañías, debido a que ambos son elementos indispensables para poder publicar en internet. Sin embargo, dependiendo de las necesidades y requerimientos, estos servicios pueden ser adquiridos a proveedores diferentes y, sencillamente, se asocian en los servidores DNS utilizados por el #[em hosting] a los registros del servicio de dominio, de forma que cada vez que en internet se pregunte por un nombre particular, este nombre (dominio) referencia a los archivos alojados en el #[em hosting].
      .col-lg-6(data-aos="fade-left")
        figure
          img.mx-auto(src="@/assets/curso/temas/27.png",style="max-width: 610px;")

    p.mb-4(data-aos="fade-right") Tenga presentes estos aspectos relativos a servicios de dominio:

    .row(data-aos="flip-up")
      .col-lg-3
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/28.png",style="max-width: 295px;")
      .col-lg-9
        AcordionA.acordion-personalizado-1(tipo="a" clase-tarjeta="acordion-personalizado-1__tarjeta")
          div.ms-md-5(titulo="Dominios de orden superior.")
            p.mb-5.ps-md-2 Para el caso de los dominios de orden superior no comerciales restringidos como, por ejemplo, edu, mil y gov, existen otras organizaciones encargadas de administrarlos. Estos solicitan, además del pago, el cumplimiento de algunos requisitos adicionales que demuestren que, efectivamente, se trata de una organización afín a cada dominio.
          div.ms-md-5(titulo="Dominio .edu")
            p.mb-5.ps-md-2 Para el caso particular del dominio .edu en el dominio geográfico .co, deberá demostrar que es una institución educativa debidamente registrada y avalada por el ministerio de educación, por medio de resolución, y una copia del registro tributario. Los trámites pueden ser realizados directamente desde Internet, en la dirección: https://www.cointernet.com.co
    
    .cont-titulo-decorativo.p-2.mt-5.mb-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/img-titulo-dec.png")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 Servidores DNS
    
    .row 
      .col-lg-6(data-aos="fade-up")
        p.mb-0 Los servidores DNS son los encargados de almacenar todos los nombres de dominio que están asociados a una dirección de IP, donde se alojan los contenidos de las aplicaciones web. Es decir, cuando se registra un dominio a una aplicación, se crea un registro en el servidor DNS donde se almacena el dominio junto con la IP, para que cuando alguien consulte en internet con ese dominio pueda encontrarlo.
      .col-lg-6(data-aos="fade-down")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/29.png",style="max-width: 610px;")

    .cont-titulo-decorativo.p-2.mt-5.mb-5(data-aos="flip-up")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/img-titulo-dec.png")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 Búsqueda de dominio en navegador web
    
    p.mb-5(data-aos="fade") Cuando se intenta acceder a un dominio a través de un navegador web, se desencadena un proceso específico para localizar la dirección IP correspondiente:

    .fondo-personalizado-3.pos-1(data-aos="zoom-in-out")
      .fondo-personalizado-3__contenido
        SlyderF.pb-5(columnas="col-lg-6 col-xl-4")
          .tarjeta.estilo-personalizado-1.p-4
            .position-relative
              span.estilo-numero-flotante 1
              figure.mb-4.pt-4
                img.mx-auto(src="@/assets/curso/temas/30.png",style="max-width: 87px;")
              p.pb-5 Al buscar un dominio en un navegador web, se encontrará primero la dirección IP asociada a este dominio.
          .tarjeta.estilo-personalizado-1.p-4.color-2
            .position-relative
              span.estilo-numero-flotante 2
              figure.mb-4.pt-4
                img.mx-auto(src="@/assets/curso/temas/31.png",style="max-width: 87px;")
              p.pb-5 Esto lleva a conectarse con el servidor DNS primario para verificar si el registro del dominio existe.
          .tarjeta.estilo-personalizado-1.p-4
            .position-relative
              span.estilo-numero-flotante 3
              figure.mb-4.pt-4
                img.mx-auto(src="@/assets/curso/temas/32.png",style="max-width: 87px;")
              p.pb-5 Si el registro no se encuentra en el DNS primario, el servidor DNS consultará con el servidor DNS raíz.
          .tarjeta.estilo-personalizado-1.p-4.color-2
            .position-relative
              span.estilo-numero-flotante 4
              figure.mb-4.pt-4
                img.mx-auto(src="@/assets/curso/temas/33.png",style="max-width: 87px;")
              p.pb-5 El servidor DNS raíz indicará si el registro existe o si es necesario recurrir a otro DNS para continuar la búsqueda.
          .tarjeta.estilo-personalizado-1.p-4
            .position-relative
              span.estilo-numero-flotante 5
              figure.mb-4.pt-4
                img.mx-auto(src="@/assets/curso/temas/34.png",style="max-width: 87px;")
              p.pb-5 Finalmente, si el registro del dominio existe, la información de la IP se retorna recursivamente a la fuente de la consulta.
          .tarjeta.estilo-personalizado-1.p-4.color-2
            .position-relative
              span.estilo-numero-flotante 6
              figure.mb-4.pt-4
                img.mx-auto(src="@/assets/curso/temas/35.png",style="max-width: 87px;")
              p.pb-5 El navegador utiliza entonces dicha dirección IP para establecer la conexión con el servidor donde está alojada la aplicación web.

</template>

<script>
export default {
  name: 'Tema2',
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
