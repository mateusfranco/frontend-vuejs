import { http } from './apiUser'
import { http2 } from './apiUser'
import { http3 } from './apiUser'

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
    information(email, token){
        return http.post('userinfo',{
            email: email,
            token: token
        })
    },
    verifyCpf(cpf){
        return http2.get('',{
            params:{
                cpf: cpf 
            }
        })
    },
    PermissionSet(email,level){
        return http3.post('permission_Add',{
            email: email,
            level: level
        })
    }
}
