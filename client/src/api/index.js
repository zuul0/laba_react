import axios from 'axios'

const $host  = axios.create({
    baseURL: `http://localhost:5173/`
})

export{$host}
export default $host;