<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { obtenerEstudiante } from '@/Client/MatriculaClient.js'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    lista : obtenerEstudiante()
  }
}
</script>
