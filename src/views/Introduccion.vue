<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.fas.fa-info
      .h3 Introducción     
    .col-lg-8.mx-auto
      img(src="@/assets/curso/i-f1.svg")
    p.mt-5 Para la apropiación más acertada de los conceptos de diseño, y construcción y gestión de las bases de datos relacionales en MySQL, en este módulo se construirán los modelos conceptuales, físico y entidad relación, además, de la generación de un script para construir la base de datos con un caso de estudio práctico que permita llevar la conceptualización y principios de las bases de datos a un escenario real.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    /* variables de vue*/
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
