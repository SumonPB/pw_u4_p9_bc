import axios from "axios";
import {obtenerTokenFacade} from "../Client/AutorizationClient"
let TOKEN = localStorage.getItem("token");
const URL = "http://localhost:8081/matricula/api/v1.0/estudiantes"


const consultarTodos = async () => {
    const data = await axios.get(`${URL}`,{headers:{
            Authorization:`Bearer ${TOKEN}`
        }
    }).then(r => r.data)
    console.log(data)
    return data;
}

const consultarPorId = async (id) => {
    const data = await axios.get(`${URL}/${id}`,{headers:{
            Authorization:`Bearer ${TOKEN}`
        }
    }).then(r => r.data)
    return data;
}

const guardar = async (body) => {
   const data = await axios.post(`${URL}`, body
        ,{headers:{
            Authorization:`Bearer ${TOKEN}`
        }
    }).then(r => r.data);
    console.log("Guardar: " + data)
    return data;
}

const actualizar = async (id, body) => {
    const data = await axios.put(`${URL}/${id}`, body,{headers:{
            Authorization:`Bearer ${TOKEN}`
        }
    }).then(r => r.data)
    console.log("Actualizar: " + data)
    return data;
}

const actualizarParcial = async (id, body) => {
    const data = await axios.patch(`${URL}/${id}`, body,{headers:{
            Authorization:`Bearer ${TOKEN}`
        }
    }).then(r => r.data)
    console.log("Actualizar Parcial: " + data)
    return data;
}

const borrar = async (id) => {
    await axios.delete(`${URL}/${id}`,{headers:{
            Authorization:`Bearer ${TOKEN}`
        }
    }).then(r => r.data)
}

//******************************************************** Fachadas*/

export const consultarTodosFachada = async () => {

    return await consultarTodos();
}

export const consultarPorIdFachada = async (id) => {

    return await consultarPorId(id);
}

export const guardarFachada = async (body) => {

    return await guardar(body);
}

export const actualizarFachada = async (id, body) => {

    return await actualizar(id, body);
}

export const actualizarParcialFachada = async (id, body) => {

    return await actualizarParcial(id, body);
}

export const borrarFachada = async (id) => {
    return await borrar(id)
}


