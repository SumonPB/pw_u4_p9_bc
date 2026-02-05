import axios from "axios";
const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJtYXRyaWN1bGEtYXV0aCIsInN1YiI6ImFkbWluIiwiZ3JvdXBzIjpbImFkbWluIl0sImlhdCI6MTc3MDI1MTc1MCwiZXhwIjoxNzcwMjU1MzUwLCJqdGkiOiI3Y2ZiZGY2Mi00NTYyLTQyYzQtOGEzNi00NTVjMDRlY2Q1Y2UifQ.Edz14YGl3TAa5Ag3UUA4DTIN4emOduSkghqIrmM9a_RAkO22LRb2n1j-NPMlBkXOTWg-VewbnNfKekxw-h6Kz4WR1Bv14kOmyqXg2fub8bWmPgK6-x8fGtl3VJz1sS4Php_6RduNjxCWZ02odRj0ljnWVNJ9YcqpnSAqfea3ehz6Cn8dqiq03aF_LUGlYj2o-BgtGf6K3wHVbMgRh9FC8BdNnezkZobWHd8-kQOYKhC8Dzy_Mg4uYvx6cqOw2bC2W2daKHt3RoqS_lZV0rpCq039D_T3vsuUoKI9tjGwVTQBVWY9F3a7MDL5PK9hBELdbA78s5rGfqfs7MSKkFGs6Q"
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