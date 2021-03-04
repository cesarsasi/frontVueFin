<template>
    <div class="d-flex align-items-center h-100 justify-center">
        <div>
            <Login :msg="openDialog" v-on:logged="logged = $event"></Login>
            <v-container   class="d-flex justify-center align-items-center w-100 h-100 mt-5 p-5">
                
                <v-col md="5">
                    <v-container class="d-flex align-center h-100">
                        <h1>Bienvenido al Sistema de Proyectos</h1>
                    </v-container>
                </v-col>
                <v-col class="d-flex flex-column flex-nowrap" md="4">
                    <v-btn color="success" @click="ToRouteLogin()" class="mr-4 mb-2">
                            Ingresar
                    </v-btn>
                    <v-btn color="success" @click="ToRouteCrearCuenta()" class="mr-4 mb-2">
                            Crear cuenta
                    </v-btn>
                </v-col>
            </v-container>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
        msg: String
    },
  components: {
  },

    methods:{
        ToRouteCrearCuenta() {
            window.location = '/crearUsuario';
        },

            ToRouteLogin() {
        window.location = '/login';
        }
        
}

}
</script>