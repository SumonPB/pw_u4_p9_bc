import axios from "axios";

const consultarTodos = async() => { 
    const response = axios.get(`http://localhost:8081/matricula/api/v1.0/estudiantes`).then(r=>r.data)
    return response;
 }

export async function obtenerEstudiante(){
    return await consultarTodos();
}

