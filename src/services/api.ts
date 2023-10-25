import axios from 'axios'

const api = axios.create({
    baseURL: 'https://foodcommerce.drcode.com.br/server'
})

export default api