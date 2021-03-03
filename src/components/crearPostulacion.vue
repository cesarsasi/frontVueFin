<template>
    <v-container fluid>
    <template>
    <v-card
        class="mx-auto my-12"
        max-width="374">
            <template>
                <div>
                    <v-card-title class="headline ">Formulario de Postulación</v-card-title>
                    <v-text-field
                        v-model = "newPostulacion.nombreProyecto"
                        id="nombreProyecto"
                        label="Nombre del Proyecto"
                        align="center"
                        class="mx-6 headline"
                        hide-details="auto"></v-text-field>
                    <v-text-field
                        v-model = "newPostulacion.nombrePostulante"
                        id="nombrePostulante"
                        label="Nombre del Postulante"
                        align="center"
                        class="mx-6 headline"
                        ></v-text-field>
                    <v-text-field 
                        v-model = "newPostulacion.apellidoPostulante"
                        id="Apellidos"
                        label="Presentación"
                        align="center"
                        class="mx-6 headline"></v-text-field>
                    <v-text-field 
                        v-model = "newPostulacion.rutPostulante"
                        id="rutPostulante"
                        label="Rut"
                        align="center"
                        class="mx-6 headline"></v-text-field>
                    <v-text-field 
                        v-model = "newPostulacion.correoPostulante"
                        id="correoPostulante"
                        label="Correo"
                        align="center"
                        class="mx-6 headline"></v-text-field>
                    <v-text-field 
                        v-model = "newPostulacion.telefonoPostulante"
                        id="telefonoPostulante"
                        label="Teléfono"
                        align="center"
                        class="mx-6 headline"></v-text-field>
                    <v-text-field 
                        v-model = "newPostulacion.propuestaValor"
                        id="propuestaValor"
                        label="Propuesta de Valor"
                        align="center"
                        class="mx-6 headline"></v-text-field>
                    <v-text-field 
                        v-model = "newPostulacion.propuestaTecnica"
                        id="propuestaTecnica"
                        label="Propuesta técnica"
                        align="center"
                        class="mx-6 headline"></v-text-field>
                    <v-text-field 
                        v-model = "newPostulacion.propuestaEconomica"
                        id="propuestaEconomica"
                        label="Propuesta Económica"
                        align="center"
                        class="mx-6 headline"></v-text-field>
                    <v-text-field 
                        v-model = "newPostulacion.planificacion"
                        id="planificacion"
                        label="Planificación"
                        align="center"
                        class="mx-6 headline"></v-text-field>
                    <v-card-actions>
                        <v-btn @click="send" color="blue" text> Enviar </v-btn>
                        <v-btn color="blue" text> Cancelar </v-btn>
                    </v-card-actions>
                </div>
            </template>
        </v-card>
        </template>
        <div class="info">
            <h2>Objeto</h2>
            <code>{{newPostulacion}}</code>
            <p class="message">
                {{message}}
            </p>
    </div>
    </v-container> 
</template> 

<script>
export default {
    name: 'CrearPostulacion',
    props: {
        msg: String
    },
    data(){
        return{
            message:'',
            newPostulacion:{
            }
        }  
    },

    methods:{
        send:async function(){
            this.message = '';
            if (this.newPostulacion.nombre == ''){
                this.message = 'Debes ingresar un nombre'
                return false
            }
            try {
                var result = await this.$http.post('/api/postulacions',this.newPostulacion);
                let postulacion = result.data;
                this.message = `Se creó una nueva postulacion con id:${postulacion.data._id}`;
                this.newPostulacion = {};
            } catch (error) {
                console.log('error', error)
                this.message = 'Ocurrió un error'
            }
        }
}
    
}
</script>