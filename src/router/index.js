import CrearProyecto from '@/components/crearProyecto.vue';
import CrearUsuario from '@/components/crearUsuario.vue';
import ListarPostulantes from '@/components/listarPostulantes.vue';
import ListarProyectos from '@/components/listarProyectos.vue';
import CrearPostulacion from '@/components/crearPostulacion.vue';
import Home from '@/components/home.vue';
import Login from '@/components/login.vue';


export const routes = [
  { path: '/crearProyecto', component: CrearProyecto },
  { path: '/crearUsuario', component: CrearUsuario },
  { path: '/listarPostulantes', component: ListarPostulantes },
  { path: '/listarProyectos', component: ListarProyectos },
  { path: '/crearPostulacion', component: CrearPostulacion },
  { path: '/', component: Home },
  { path: '/login', component: Login }
];

export default routes
