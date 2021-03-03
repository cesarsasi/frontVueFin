<template>
  <v-container fluid>
    <v-data-iterator
      :items="postulaciones"
      :items-per-page.sync="itemsPerPage"
      hide-default-footer
    >
      <template v-slot:header>
        <v-toolbar
          class="mb-2"
          color="indigo darken-5"
          dark
          flat
        >
          <v-toolbar-title>Lista de Postulaciones </v-toolbar-title>
        </v-toolbar>
         <v-btn @click="send" color="blue" text> Enviar </v-btn>
      </template>

      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="postulacion in props.items"
            :key="postulacion.nombreProyecto"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card>
              <v-card-title class="subheading font-weight-bold">
                {{ postulacion.nombreProyecto }}
              </v-card-title>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item>
                  <v-list-item-content>Calories:</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ postulacion.nombrePostulante }}
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Fat:</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ postulacion.apellidoPostulante }}
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Carbs:</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ postulacion.rutPostulante }}
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Protein:</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ postulacion.correoPostulante }}
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Sodium:</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ postulacion.telefonoPostulante }}
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Calcium:</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ postulacion.propuestaValor }}
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Iron:</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ postulacion.propuestaTecnica }}
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Iron:</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ postulacion.propuestaEconomica }}
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Iron:</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ postulacion.planificacion }}
                  </v-list-item-content>
                </v-list-item>
              </v-list>

              
            </v-card>
          </v-col>
        </v-row>
      </template>

      <template v-slot:footer>
        <v-toolbar
          class="mt-2"
          color="indigo"
          dark
          flat
        >
          <v-toolbar-title class="subheading">
            This is a footer
          </v-toolbar-title>
        </v-toolbar>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      itemsPerPage: 4,
      postulaciones: [],
    }),
    methods:{
        send: function(){
            this.message = '';
            try {
                var result = this.$http.get('/api/postulacions');
                this.message = 'se creo bien bacano ${result.data}';
                this.postulaciones = result.data;
                console.log(this.postulaciones);
            } catch (error) {
                console.log('error', error)
                this.message = 'Ocurrió un error'
            }
        }
    }

  }
</script>