<template>
<div class="container">
    <h1>Agregar un proyecto</h1>
    <form>
        <div>
            <label for="name">Nombre del Proyecto </label>
            <input type="text" id="nombre" v-model="newProyecto.nombre">
        </div>
        <div>
            <label for="name">Nombre de Compañia </label>
            <input type="text" id="gender" v-model="newProyecto.nombreCompania">
        </div>
        <div>
            <label for="name">Presentacion </label>
            <input type="text" id="phone" v-model="newProyecto.presentacion">
        </div>
        <div>
            <label for="name">Fundamentacion </label>
            <input type="text" id="phone" v-model="newProyecto.fundamentacion">
        </div>
        <div>
            <label for="name">Condiciones </label>
            <input type="text" id="phone" v-model="newProyecto.condiciones">
        </div>
        <div>
            <label for="name">Requerimientos Proyecto </label>
            <input type="text" id="phone" v-model="newProyecto.requerimientosProyecto">
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
</div>
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
                var result = await this.$http.post('/api/proyectos',
this.newProyecto);
                let proyecto = result.data;
                this.message = `Se creó un nuevo proyecto con id:
${proyecto.data._id}`;
                this.newProyecto = {};
            } catch (error) {
                console.log('error', error)
                this.message = 'Ocurrió un error'
            }
        }
    }
}
</script>