<template>
    <div class="container">
        <label for="id_Est"> Ingrese el Id De Un Estudiante A Eliminar</label>
        <input type="number" id="id_Est" v-model="id_estudiante">
        <button @:click="borrarEstudiante()">Eliminar</button>
    </div>
</template>
<script>
import {
    borrarFachada,
} from "../Client/MatriculaClient.js";
import router from '../router';
export default {
    data() {
        return {
            id_estudiante: null,
        }
    },
    methods: {
        async borrarEstudiante() {
            await borrarFachada(this.id_estudiante);
            setTimeout(async () => {
                await router.push({ name: 'about' })
            }, 1500)
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
</style>
