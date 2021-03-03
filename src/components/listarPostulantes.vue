<template>

<table>
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Apellido</th>
      <th>Rut</th>
      <th>Correo</th>
      <th>Telefono</th>
    </tr>
  </thead>
  <tbody >
    <tr>
      <td>January</td>
      <td>$100</td>
      <td>$19145688 - 9</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$80</td>
    </tr>
  </tbody>
  <tfoot >
    <tr>
      <td>Sum</td>
      <td>$180</td>
    </tr>
  </tfoot>
</table> 
</template>

<script>
export default {
  name: 'ListarPostulantes',
  props: {
      msg: String
  }
}
</script>