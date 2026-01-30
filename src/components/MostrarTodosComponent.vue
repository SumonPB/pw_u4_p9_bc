<template>
  <div>
    {{Lista}}
  </div>
</template>

<script>
import {
  consultarTodosFachada,
} from "../Client/MatriculaClient.js";
import { onMounted } from 'vue'
export default {
  data(){
    Lista : null
  },
     mounted(){
    this.Lista = this.consultar()
  },
  methods:{
    async consultar(){
      return  await consultarTodosFachada();
    }
  }

}


</script>

<style>

</style>