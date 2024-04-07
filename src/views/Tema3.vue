<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 FTP

    .fondo-personalizado-4.p-4.p-lg-0.mb-4
      .row.align-items-center
        .col-lg-7
          p.mb-0.text-white.p-lg-5 FTP hace referencia a un protocolo de transferencia de archivos que tiene más de 50 años de antigüedad, pero ampliamente utilizado para la transferencia de información entre equipos conectados por red. Por medio de este protocolo, una máquina conectada en red con otra podrá visualizar y compartir información.
        .col-lg-5.order-first.order-lg-last
          figure.mb-4.mb-lg-0
            img.mx-auto(src="@/assets/curso/temas/37.png",style="max-width: 400px;")
    
    .row.justify-content-center.mb-4
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 1.] Protocolo FTP
        
        .fondo-color-sistema-p.borde-16.p-3.px-lg-5
          figure
            img.mx-auto(src="@/assets/curso/temas/39.png",style="max-width: 575px;",alt="La imagen muestra el esquema del Protocolo de Transferencia de Archivos (FTP), donde un cliente utiliza este protocolo para intercambiar archivos con un servidor a través de Internet.")
    p.mb-4 Para la transferencia de archivos, se utiliza una estructura de tipo cliente servidor, donde la máquina cliente se conecta a la máquina servidora, para visualizar y hacer envío de datos utilizando los puertos 20 y 21.
    p.mb-4 Tenga en cuenta los siguientes aspectos de la transferencia de archivos:

    p(style="color: red;")  ¡¡¡¡¡FALTAN LAS TARJETAS ACA !!!!!

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
