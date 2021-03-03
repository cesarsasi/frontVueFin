<template>
    <v-app>
          <v-app-bar app color="primary" dark>
            <div class="d-flex align-center">
                <v-btn icon color="blue" >
                </v-btn>
                <h3 style="margin-bottom: 0;">Sistema de postulaciones a Proyectos </h3>
            </div >
            <v-spacer></v-spacer>
            <div>
                <!-- Colocar if para saber el Rol del usuario para que no se muestre a un voluntario-->

            </div>
            <div >
              <v-btn text >
                <v-icon rigth>mdi-heart</v-icon>
                Salir  
              </v-btn> 
            </div>
          </v-app-bar>
          <v-main>
            <router-view to="/crearProyecto"></router-view>
          </v-main>
      </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },

  data: () => ({
    //
  }),

  mounted(){
    console.log("mensajito para prueba")
    this.getTodos();
  },
  
  methods:{
    getTodos(){
      console.log("Codigo respuesta")
    }
  }
};
</script>