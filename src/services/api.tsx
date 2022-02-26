
import axios from 'axios'

export const KEY = "87f7923ac7635b4faa08e20f42090271178cc9ae"

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers:{
        'Authorization': `Bearer ${KEY}`
    }
})

export default api