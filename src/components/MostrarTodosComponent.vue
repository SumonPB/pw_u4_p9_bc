<template>
  <div class="container">
    <table class="tabla-estudiantes">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Fecha de Nacimiento</th>
          <th>Provincia</th>
          <th>Género</th>
          <th>Hijos</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="estudiante in Lista" :key="estudiante.id">
          <td>{{ estudiante.id }}</td>
          <td>{{ estudiante.nombre }}</td>
          <td>{{ estudiante.apellido }}</td>
          <td>{{ estudiante.fechaNacimiento }}</td>
          <td>{{ estudiante.provincia }}</td>
          <td>{{ estudiante.genero }}</td>
          <td>{{ estudiante.link[1]?.href }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import {
  consultarTodosFachada,
} from "../Client/MatriculaClient.js";

export default {
  data() {
    return{
      Lista:[]
    }
    
  },
  async beforeMount() {
    this.Lista = await this.consultar()
  },
  methods: {
    async consultar() {
      return await consultarTodosFachada();
    }
  }

}


</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
}

.tabla-estudiantes {
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.tabla-estudiantes thead {
  background-color: #1e293b;
  color: #ffffff;
}

.tabla-estudiantes th,
.tabla-estudiantes td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid #e5e7eb;
}

.tabla-estudiantes th {
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 0.05em;
}

.tabla-estudiantes tbody tr:hover {
  background-color: #f1f5f9;
}

.tabla-estudiantes tbody tr:nth-child(even) {
  background-color: #f8fafc;
}

.tabla-estudiantes td {
  font-size: 14px;
  color: #334155;
}
</style>
