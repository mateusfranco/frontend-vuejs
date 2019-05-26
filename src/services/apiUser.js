import axios from 'axios'

export const http = axios.create({
    baseURL: 'http://0.0.0.0:5000'
})

export const http2 = axios.create({
    baseURL: 'http://cmtechdev.000webhostapp.com/apps/sisco/api/validation.php'
})

export const http3 = axios.create({
    baseURL: 'http://0.0.0.0:5002'
})