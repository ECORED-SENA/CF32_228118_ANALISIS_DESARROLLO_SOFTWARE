<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se presenta una síntesis de la temática estudiada en el componente formativo.

    .row.justify-content-center
      .col-lg-10.mb-5
        .fondo-color-sistema-h.p-3.borde-20.p-lg-5
          figure
            img(src="@/assets/curso/temas/sintesis.svg", alt="El diagrama estructura los conceptos de publicación web en dos categorías principales: hosting y dominio. Bajo hosting, se clasifican varios tipos como hosting compartido, servidor dedicado, VPS, Cloud hosting y hosting gratuito, y se menciona el uptime como medida de rendimiento. en cuanto a dominio, se detalla su estructura en subdominio y dominio, y su soporte a través de dominio de primer nivel y servidor DNS.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
