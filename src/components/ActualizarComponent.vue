<template>
    <div class="container">
        <div class="buscar">
        <label for="id_Est"> Ingrese el Id De Un Estudiante</label>
        <input type="number" id="id_Est" v-model="id_estudiante">
        <button @:click="buscarEstudiante()">Buscar</button>
        </div>

        <div class="modificar" v-if="estudiante.nombre">
        <form @submit.prevent="guardarEstudiante" class="form-estudiante">
        <label>Nombre:</label>
        <input type="text" v-model="estudiante.nombre" required>

        <label>Apellido:</label>
        <input type="text" v-model="estudiante.apellido" required>

        <label>Fecha de Nacimiento:</label>
        <input type="datetime-local" v-model="estudiante.fechaNacimiento" required>

        <label>Provincia:</label>
        <input type="text" v-model="estudiante.provincia" required>

        <label>Género:</label>
        <input type="text" v-model="estudiante.genero" required>

        <button type="submit">Guardar Estudiante</button>
    </form>
    </div>

    </div>
        
</template>

<script>
import { actualizarFachada, consultarPorIdFachada } from "../Client/MatriculaClient.js";
import router from '../router';
export default {
    data() {
        return {
            id_estudiante: null,
            estudiante: {
                nombre: "",
                apellido: "",
                fechaNacimiento: "",
                provincia: "",
                genero: ""
            }
        };
    },
    methods: {
        async guardarEstudiante() {
            try {
                await actualizarFachada(this.id_estudiante,this.estudiante);
                this.estudiante = {
                    nombre: "",
                    apellido: "",
                    fechaNacimiento: "",
                    provincia: "",
                    genero: ""
                };
                setTimeout(async () => {
                await router.push({ name: 'about' })
            }, 1500)
            } catch (error) {
                console.error(error);
            }
        },
        async buscarEstudiante() {
            this.estudiante = await consultarPorIdFachada(this.id_estudiante);
        }

    }
};
</script>


<style scoped>
.form-estudiante {
    max-width: 520px;
    margin: 60px auto;
    padding: 30px 35px;
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.form-estudiante label {
    display: block;
    margin-bottom: 6px;
    font-weight: 600;
    color: #334155;
}

.form-estudiante input {
    width: 100%;
    padding: 10px 12px;
    margin-bottom: 16px;
    font-size: 14px;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    transition: border-color 0.2s, box-shadow 0.2s;
}

.form-estudiante input:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
}

.form-estudiante button {
    width: 100%;
    padding: 12px;
    margin-top: 10px;
    font-size: 15px;
    font-weight: 600;
    background-color: #2563eb;
    color: #ffffff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s, transform 0.1s;
}

.form-estudiante button:hover {
    background-color: #1d4ed8;
}

.form-estudiante button:active {
    transform: scale(0.98);
}

.buscar {
  max-width: 420px;
  margin: 40px auto;
  padding: 20px 25px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.buscar label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #334155;
}

.buscar input {
  width: 100%;
  padding: 10px 12px;
  margin-bottom: 15px;
  font-size: 14px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.buscar input:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
}

.buscar button {
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

.buscar button:hover {
  background-color: #1d4ed8;
}

.buscar button:active {
  transform: scale(0.98);
}
</style>

