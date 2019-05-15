import { http } from './apiUser'

export default{
    login( email, password){
        return http.post('user/login',{
            email: email,
            password: password
        })
    },
    register(name, email, password, cpf, institution, phone, bornDate, sex){
        return http.post('user',{
            name: name,
            cpf: cpf,
            email: email,
            password: password,
            phone: phone,
            born_date: bornDate,
            sex: sex,
            institution: institution
        })
    },
<<<<<<< HEAD
    information(email, token){
        return http.post('userinfo',{
            email: email,
            token: token
        })
=======
    information(url, email, token){
        return http.get(url,{
            email: email,
            token: token
        })    
>>>>>>> user-core
    }

}
