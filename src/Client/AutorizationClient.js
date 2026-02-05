import axios from "axios";
const URL = "http://localhost:8082/auth/token"
let username = JSON.stringify({
  "username": "admin",
  "password": "admin"
});

const TOKEN = ""

const obtenerToken = async () => {
    const data = await axios.get(`${URL}`,username).then(r => r.data)
    console.log(data)

    return data;
}

export const obtenerTokenFacade = async () => {

    return await obtenerToken();
}

