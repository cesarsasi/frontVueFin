<template>
    <v-container fluid>
    <template>
    <v-card
        class="mx-auto my-12"
        max-width="374">
            <template>
                <div>
                    <v-card-title class="headline ">Agregar un proyecto</v-card-title>
                    <v-text-field
                        v-model = "newProyecto.nombre"
                        id="nombre"
                        label="Nombre del Proyecto"
                        align="center"
                        class="mx-6 headline"
                        hide-details="auto"></v-text-field>
                    <v-text-field
                        v-model = "newProyecto.nombreCompania"
                        id="nombreCompania"
                        label="Nombre de Compañia"
                        align="center"
                        class="mx-6 headline"
                        ></v-text-field>
                    <v-text-field 
                        v-model = "newProyecto.presentacion"
                        id="presentacion"
                        label="Presentacion"
                        align="center"
                        class="mx-6 headline"></v-text-field>
                    <v-text-field 
                        v-model = "newProyecto.fundamentacion"
                        id="fundamentacion"
                        label="Fundamentacion"
                        align="center"
                        class="mx-6 headline"></v-text-field>
                    <v-text-field 
                        v-model = "newProyecto.condiciones"
                        id="condiciones"
                        label="Condiciones"
                        align="center"
                        class="mx-6 headline"></v-text-field>
                    <v-text-field 
                        v-model = "newProyecto.requerimientosProyecto"
                        id="reqProyecto"
                        label="Requerimientos Proyecto"
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
            <code>{{newProyecto}}</code>
            <p class="message">
                {{message}}
            </p>
    </div>
    </v-container> 
</template> 

<script>
export default {
    name: 'CrearProyecto',
    props: {
        msg: String
    },
    data(){
        return{
            message:'',
            newProyecto:{
            }
        }  
    },

    methods:{
        send:async function(){
            this.message = '';
            if (this.newProyecto.nombre == ''){
                this.message = 'Debes ingresar un nombre para el proyecto'
                return false
            }
            try {
                var result = await this.$http.post('/api/projects',this.newProyecto);
                let proyecto = result.data;
                this.message = `Se creó un nuevo proyecto con id:${proyecto.data._id}`;
                this.newProyecto = {};
            } catch (error) {
                console.log('error', error)
                this.message = 'Ocurrió un error'
            }
        }
}
    
}
</script>