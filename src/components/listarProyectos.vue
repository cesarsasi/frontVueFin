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
          <td><h4>Nombre</h4></td>
          <td><h4>NombreCompania</h4></td>
          <td><h4>Presentacion</h4></td>
          <td><h4>Fundamentacion</h4></td>
          <td><h4>Condiciones</h4></td>
          <td><h4>RequerimientosProyecto</h4></td>

        </tr>
          <tr v-for="proyecto in proyectos" v-bind:key="proyecto">
            <td><v-flex class="mr-5 mt-3">{{ proyecto.nombre }}</v-flex></td>
            <td><v-flex class="mr-5 mt-3">{{ proyecto.nombreCompania }}</v-flex></td>
            <td><v-flex class="mr-5 mt-3">{{ proyecto.presentacion }}</v-flex></td>
            <td><v-flex class="mr-5 mt-3">{{ proyecto.fundamentacion }}</v-flex></td>
            <td><v-flex class="mr-5 mt-3">{{ proyecto.condiciones }}</v-flex></td>
            <td><v-flex class="mr-5 mt-3">{{ proyecto.requerimientosProyecto }}</v-flex></td>
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
      proyectos: null,
    }),

    mounted(){
      this.getProyectos();
    },

    methods:{
        getProyectos(){
            this.$http.get('/api/projects').then(response => {
              this.proyectos = response.data.data})
            .catch (e=> console.log(e))
            console.log(this.proyectos)
        }
    }

  }
</script>