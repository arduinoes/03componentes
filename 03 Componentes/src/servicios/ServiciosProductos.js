import axios from "axios";

const apiClient = axios.create({
    baseURL:'https://my-json-server.typicode.com/arduinoes/datos',
    withCredentials: false,
    headers: {
        Aceppt: 'application/json',
        'Content-Type':'application/json'
    }
})

export default {
    obtenerProductos(){
       return apiClient.get('/productos')
    },
    obtenerProducto(id){
        return apiClient.get('/productos/' + id )
     },
     enviarForm(){
        return apiClient.post('/productos')
     },

}
