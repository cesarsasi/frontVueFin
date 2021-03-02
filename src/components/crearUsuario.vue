<template>
<div class="container">
    <h1>Creación cuenta usuario</h1>
    <form>
        <div>
            <label for="name">Nombre</label>
            <input type="text" id="nombre" v-model="newUsuario.nombre">
        </div>
        <div>
            <label for="name">Apellido</label>
            <input type="text" id="apellido" v-model="newUsuario.apellido">
        </div>
        <div>
            <label for="name">Rut</label>
            <input type="text" id="rut" v-model="newUsuario.rut">
        </div>
        <div>
            <label for="name">Correo</label>
            <input type="text" id="correo" v-model="newUsuario.correo">
        </div>
        <div>
            <label for="name">Contraseña</label>
            <input type="text" id="contrasena" v-model="newUsuario.contrasena">
        </div>
        <div>
        <div>
            <label for="name">Telefono</label>
            <input type="text" id="telefono" v-model="newUsuario.telefono">
        </div>
            <button type="button" @click="send">Crear Usuario</button>
        </div>
        <div class="info">
            <h2>Objeto</h2>
            <code>{{newUsuario}}</code>
            <p class="message">
                {{message}}
            </p>
        </div>
    </form>
</div>
</template> 

<script>
export default {
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
                var result = await this.$http.post('/api/usuarios',
this.newUsuario);
                let cliente = result.data;
                this.message = `Se creó un nuevo usuario con id:
${usuario.data._id}`;
                this.newUsuario = {};
            } catch (error) {
                console.log('error', error)
                this.message = 'Ocurrió un error'
            }
        }
    }
}
</script>