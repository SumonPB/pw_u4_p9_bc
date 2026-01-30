<template>
   <router-link to="/showAll">MostrarTodos</router-link>
  <button @:click ="consultarPorId()">Consultar Por Id</button>
  <button @:click ="crear()">Crear</button>
  <button @:click ="actualizar()">Actualizar</button>
  <button @:click ="acttualizarParcial()">Actualizar Parcial</button>
  <button @:click ="eliminar()">Eliminar</button>
</template>

<script>
import {
  consultarPorIdFachada,
  consultarTodosFachada,
  actualizarFachada,
  actualizarParcialFachada,
  borrarFachada,
  guardarFachada,
} from "../Client/MatriculaClient.js";
export default {
   methods: {
    consultarPorId(id) {
      consultarPorIdFachada(id);
    },
    async consultarAll() {
      await consultarTodosFachada();
    },
    async crear(body) {
     await guardarFachada(body);
    },
    async actualizar(id,body) {
     await actualizarFachada(id,body);
    },
    async acttualizarParcial(id,body) {
     await actualizarParcialFachada(id,body);
    },
    async eliminar(id) {
     await borrarFachada(id);
    }
  },
};
</script>

<style>
</style>