import axios from "axios";

const URL = "http://localhost:8082/auth/token";


const obtenerToken = async (user,password) => {
    const payload = {
        username: user,
        password: password
    };
    //el header se usa para que axiois mande al aut un json caso contrario envia cosas extrañas
    const { data } = await axios.post(URL, payload, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    return data.accessToken;
};

export const obtenerTokenFacade = async () => {

    return await obtenerToken();
}
