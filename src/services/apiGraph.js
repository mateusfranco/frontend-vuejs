import axios from 'axios'

export const http = axios.create({
    baseURL : 'http://cmtechdev.000webhostapp.com/apps/sisco/api/graph.php'
})