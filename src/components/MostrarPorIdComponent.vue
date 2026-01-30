<template>
    <div class="container">
        <label for="id_Est"> Ingrese el Id De Un Estudiante</label>
        <input type="number" id="id_Est" v-model="id_estudiante">
        <button @:click="buscarEstudiante()">Buscar</button>
        <div class="estudianteContainer" v-if="estudiante != null">
            <h1>Id: {{ estudiante.id }}</h1>
            <h1>Nombre: {{ estudiante.nombre }}</h1>
            <h1>Apellido: {{ estudiante.apellido }}</h1>
            <h1>Fecha de Nacimiento: {{ estudiante.fechaNacimiento }}</h1>
            <h1>Provincia: {{ estudiante.provincia }}</h1>
            <h1>Genero: {{ estudiante.genero }}</h1>
            <h1>Hijos: {{ estudiante.link[1]?.href }}</h1>
        </div>
    </div>
</template>
<script>
import {
    consultarPorIdFachada,
} from "../Client/MatriculaClient.js";
export default {
    data() {
        return {
            id_estudiante: null,
            estudiante: null
        }
    },
    methods: {
        async buscarEstudiante() {
            this.estudiante = await consultarPorIdFachada(this.id_estudiante);
        }
    }
}
</script>
<style scoped>
.container {
  max-width: 500px;
  margin: 60px auto;
  padding: 25px 30px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

label {
  display: block;
  font-weight: 600;
  margin-bottom: 8px;
  color: #334155;
}

input[type="number"] {
  width: 100%;
  padding: 10px 12px;
  font-size: 14px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  margin-bottom: 15px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

input[type="number"]:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
}

button {
  width: 100%;
  padding: 10px;
  font-size: 15px;
  font-weight: 600;
  background-color: #2563eb;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;
}

button:hover {
  background-color: #1d4ed8;
}

button:active {
  transform: scale(0.98);
}

.estudianteContainer {
  margin-top: 25px;
  padding: 18px;
  border-radius: 8px;
  background-color: #f8fafc;
  border-left: 5px solid #2563eb;
}

.estudianteContainer h1 {
  font-size: 14px;
  font-weight: 500;
  margin: 6px 0;
  color: #334155;
}

.estudianteContainer h1:first-child {
  font-weight: 700;
}
</style>
