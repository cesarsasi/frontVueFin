import CrearProyecto from '@/components/crearProyecto.vue';
import CrearUsuario from '@/components/crearUsuario.vue';
import ListarPostulantes from '@/components/listarPostulantes.vue';
import ListarProyectos from '@/components/listarProyectos.vue';
import Home from '@/components/home.vue';


export const routes = [
  { path: '/crearProyecto', component: CrearProyecto },
  { path: '/crearUsuario', component: CrearUsuario },
  { path: '/listarPostulantes', component: ListarPostulantes },
  { path: '/listarProyectos', component: ListarProyectos },
  { path: '/', component: Home },
];

export default routes
