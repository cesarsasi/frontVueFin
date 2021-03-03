<template>
    <v-container fluid>
    <template>
    <v-card
        class="mx-auto my-12"
        max-width="374">
            <template>
                <div>
                    <v-card-title class="headline ">Creación cuenta usuario</v-card-title>
                    <v-text-field
                        v-model = "newUsuario.nombre"
                        id="nombre"
                        label="Nombre"
                        align="center"
                        class="mx-6 headline"
                        hide-details="auto"></v-text-field>
                    <v-text-field 
                        v-model = "newUsuario.apellido"
                        id="apellido"
                        label="Apellido"
                        align="center"
                        class="mx-6 headline"
                        ></v-text-field>
                    <v-text-field 
                        v-model = "newUsuario.rut"
                        id="rut"
                        label="Rut"
                        align="center"
                        class="mx-6 headline"></v-text-field>
                    <v-text-field 
                        v-model = "newUsuario.correo"
                        id="correo"
                        label="Correo"
                        align="center"
                        class="mx-6 headline"></v-text-field>
                    <v-text-field 
                        v-model = "newUsuario.contrasena"
                        id="contraseña"
                        label="Contraseña"
                        align="center"
                        class="mx-6 headline"></v-text-field>
                    <v-text-field 
                        v-model = "newUsuario.telefono"
                        id="telefono"
                        label="Telefono"
                        align="center"
                        class="mx-6 headline"></v-text-field>
                    <v-text-field 
                        v-model = "newUsuario.rol"
                        id="rol"
                        label="Rol"
                        align="center"
                        class="mx-6 headline"></v-text-field>
                    <v-card-actions>
                        <v-btn @click="send" color="blue" text> Crear Usuario </v-btn>
                        <v-btn color="blue" text> Cancelar </v-btn>
                    </v-card-actions>
                </div>
            </template>
    </v-card>
    </template>
    <div class="info">
            <h2>Objeto</h2>
            <code>{{newUsuario}}</code>
            <p class="message">
                {{message}}
            </p>
    </div>
    </v-container>
</template> 

<script>
export default {
    name: 'CrearUsuario',
    props: {
        msg: String
    },
    data(){
        return{
            message:'',
            newUsuario:{
            }
        }       
    },
    methods:{
        send:async function(){
            this.message = '';
            if (this.newUsuario.nombre == ''){
                this.message = 'Debes ingresar un nombre'
                return false
            }
            try {
                var result = await this.$http.post('/api/users',
this.newUsuario);
                let user = result.data;
                this.message = `Se creó un nuevo usuario con id:
${user.data._id}`;
                this.newUsuario = {};
            } catch (error) {
                console.log('error', error)
                this.message = 'Ocurrió un error'
            }
        }
    }
}
</script>