<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs6>
        <h2>Lista de postulantes:</h2>
          </v-flex>
    </v-layout>

    <v-layout justify-center>
      <table>
        <tbody>
        <tr>
          <td><h4>Nombre Proyecto</h4></td>
          <td><h4>Nombre Postulante</h4></td>
          <td><h4>Apellido Postulante</h4></td>
          <td><h4>Rut </h4></td>
          <td><h4>Correo </h4></td>
          <td><h4>Telefono </h4></td>
          <td><h4>Prop. Valor </h4></td>
          <td><h4>Prop. Econo </h4></td>
          <td><h4>Prop. Tec </h4></td>
          <td><h4>Planificacion </h4></td>


        </tr>
          <tr v-for="postulacion in postulaciones" v-bind:key="postulacion">
            <td><v-flex class="mr-5 mt-3">{{ postulacion.nombreProyecto }}</v-flex></td>
            <td><v-flex class="mr-5 mt-3">{{ postulacion.nombrePostulante }}</v-flex></td>
            <td><v-flex class="mr-5 mt-3">{{ postulacion.apellidoPostulante }}</v-flex></td>
            <td><v-flex class="mr-5 mt-3">{{ postulacion.rutPostulante }}</v-flex></td>
            <td><v-flex class="mr-5 mt-3">{{ postulacion.correoPostulante }}</v-flex></td>
            <td><v-flex class="mr-5 mt-3">{{ postulacion.telefonoPostulante }}</v-flex></td>
            <td><v-flex class="mr-5 mt-3">{{ postulacion.propuestaValor }}</v-flex></td>
            <td><v-flex class="mr-5 mt-3">{{ postulacion.propuestaEconomica }}</v-flex></td>
            <td><v-flex class="mr-5 mt-3">{{ postulacion.propuestaTecnica }}</v-flex></td>
            <td><v-flex class="mr-5 mt-3">{{ postulacion.planificacion }}</v-flex></td>
          </tr>
        </tbody>
      </table>
    </v-layout>
  </v-container>
</template>


<script>
  export default {
    data: () => ({
      itemsPerPage: 4,
      postulanteSeleccionado:null,
      postulaciones: null,
    }),

    mounted(){
      this.getPostulaciones();
    },

    methods:{
        getPostulaciones(){
            this.$http.get('/api/postulacions').then(response => {
              this.postulaciones = response.data.data})
            .catch (e=> console.log(e))
            console.log(this.postulaciones)
        }
    }

  }
</script>