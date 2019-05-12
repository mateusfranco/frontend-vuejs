import { http } from './config'

export default{
    login(url, email, password){
        return http.post(url,{
            email: email,
            password: password
        })
    },
    register(url, name, email, password, cpf, institution, phone, bornDate, sex){
        return http.post(url,{
            name: name,
            cpf: cpf,
            email: email,
            password: password,
            phone: phone,
            born_date: bornDate,
            sex: sex,
            institution: institution
        })
    }
}
