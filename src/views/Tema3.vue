<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.pb-0.pb-md-0
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 3
      h1 FTP

    .fondo-personalizado-4.p-4.p-lg-0.mb-4(data-aos="fade-down")
      .row.align-items-center
        .col-lg-7
          p.mb-0.text-white.p-lg-5 FTP hace referencia a un protocolo de transferencia de archivos que tiene más de 50 años de antigüedad, pero ampliamente utilizado para la transferencia de información entre equipos conectados por red. Por medio de este protocolo, una máquina conectada en red con otra podrá visualizar y compartir información.
        .col-lg-5.order-first.order-lg-last
          figure.mb-4.mb-lg-0
            img.mx-auto(src="@/assets/curso/temas/37.png",style="max-width: 400px;")
    
    .row.justify-content-center.mb-4
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos="fade")
          p.mb-0 #[b Figura 1.] Protocolo FTP
        
        .fondo-color-sistema-p.borde-16.p-3.px-lg-5(data-aos="zoom-in-out")
          figure
            img.mx-auto(src="@/assets/curso/temas/39.png",style="max-width: 575px;",alt="La imagen muestra el esquema del Protocolo de Transferencia de Archivos (FTP), donde un cliente utiliza este protocolo para intercambiar archivos con un servidor a través de Internet.")
    p.mb-4(data-aos="fade-right") Para la transferencia de archivos, se utiliza una estructura de tipo cliente servidor, donde la máquina cliente se conecta a la máquina servidora, para visualizar y hacer envío de datos utilizando los puertos 20 y 21.
    p.mb-4(data-aos="fade-left") Tenga en cuenta los siguientes aspectos de la transferencia de archivos:

    .fondo-personalizado-6.pt-5.mb-3(style="padding-bottom: 4rem;")
      .fondo-personalizado-6__contenido
        .row(data-aos="flip-up")
          .col-lg-3.col-md-6.mb-5
            .tarjeta-avatar.estilo-tarjetas-personalizado-2
              img(src='@/assets/curso/temas/53.png')
              .tarjeta
                .p-4
                  h4.text-center FTP
                  p Hoy existen muchas aplicaciones que encapsulan toda la lógica asociada a las conexiones cliente y servidor, por lo que la transferencia de archivos es mucho más simple. 
          .col-lg-3.col-md-6.mb-5
            .tarjeta-avatar.estilo-tarjetas-personalizado-2
              img(src='@/assets/curso/temas/54.png')
              .tarjeta
                .p-4
                  h4.text-center Sistema de autenticación
                  p Para proteger las conexiones debe existir un sistema de autenticación que le permita al usuario establecer comunicación exitosa con el servidor y, el servidor pueda autorizar acceso a un cliente plenamente identificado.
          .col-lg-3.col-md-6.mb-5
            .tarjeta-avatar.estilo-tarjetas-personalizado-2
              img(src='@/assets/curso/temas/55.png')
              .tarjeta
                .p-4
                  h4.text-center Transferencia de archivos
                  p Para publicar las aplicaciones web y que estén disponibles en internet, se deben transferir los archivos desde la máquina local hacia el servidor encargado de alojarlos en internet, es decir el #[em host].
          .col-lg-3.col-md-6.mb-5
            .tarjeta-avatar.estilo-tarjetas-personalizado-2
              img(src='@/assets/curso/temas/56.png')
              .tarjeta
                .p-4
                  h4.text-center Credenciales de acceso
                  p Para transferir los archivos, generalmente, los servicios de #[em hosting] proveen a sus clientes autorizados unas credenciales de acceso y algunas aplicaciones para facilitar el traslado de los archivos, y entre las aplicaciones estándar se debe encontrar una aplicación de FTP.

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
