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
                        id="nombre"
                        label="Nombre del Proyecto"
                        align="center"
                        class="mx-6 headline"
                        hide-details="auto"></v-text-field>
                    <v-text-field 
                        id="nombreCompania"
                        label="Nombre de Compañia"
                        align="center"
                        class="mx-6 headline"
                        ></v-text-field>
                    <v-text-field 
                        id="presentacion"
                        label="Presentacion"
                        align="center"
                        class="mx-6 headline"></v-text-field>
                    <v-text-field 
                        id="fundamentacion"
                        label="Fundamentacion"
                        align="center"
                        class="mx-6 headline"></v-text-field>
                    <v-text-field 
                        id="condiciones"
                        label="Condiciones"
                        align="center"
                        class="mx-6 headline"></v-text-field>
                    <v-text-field 
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

        <form>
            <div>
                <label for="name">Nombre del Proyecto </label>
                <input type="text" v-model="newProyecto.nombre">
            </div>
            <div>
                <label for="name">Nombre de Compañia </label>
                <input type="text" v-model="newProyecto.nombreCompania">
            </div>
            <div>
                <label for="name">Presentacion </label>
                <input type="text" v-model="newProyecto.presentacion">
            </div>
            <div>
                <label for="name">Fundamentacion </label>
                <input type="text" v-model="newProyecto.fundamentacion">
            </div>
            <div>
                <label for="name">Condiciones </label>
                <input type="text" v-model="newProyecto.condiciones">
            </div>
            <div>
                <label for="name">Requerimientos Proyecto </label>
                <input type="text" v-model="newProyecto.requerimientosProyecto">
            </div>
            <div>
                <button type="button" @click="send">Crear Proyecto</button>
            </div>
            <div class="info">
                <h2>Objeto</h2>
                <code>{{newProyecto}}</code>
                <p class="message">
                    {{message}}
                </p>
            </div>
        </form>
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
                var result = await this.$http.post('/api/proyectos',this.newProyecto);
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