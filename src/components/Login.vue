<template>
  <div class="login">
    <h2>Login</h2>
    <input type="text" placeholder="Usuario" v-model="usuario" required>
    <input type="password" placeholder="Contraseña" v-model="password" required>
    <button @:click="login()">Entrar</button>
  </div>
</template>

<script>
import router from '../router';
import {obtenerTokenFacade} from '../Client/AutorizationClient.js'
export default {
  data(){
    return{
      usuario:'',
      password:''
    }
  },
  methods:{
    login(){
      //***llamamos a obtener el token */
      const TOKEN= obtenerTokenFacade(this.usuario,this.password)
      if(TOKEN !==null){
        console.log(TOKEN)
        localStorage.setItem("token",TOKEN)
        localStorage.setItem("estaAutenticado",true)
        router.push({ name: 'about' })
      }else{
        console.log("Error de Autenticacion")
      }
    }
  }
}
</script>

<style>
.login{
  width: 300px;
  margin: 100px;
  padding: 20px;
  border: 1px solid rgb(212, 182, 182);
  border-radius: 8px;
  text-align: center;
  row-gap: 15px;
}
input{
  width: 90%;
  margin-bottom: 10px;
  padding: 8px;
}
button{
  width: 90%;
  padding: 8px;
  cursor: pointer;
}
</style>