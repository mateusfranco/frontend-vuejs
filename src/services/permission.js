import { http } from './apiPermission'

export default{
    checkPermission(cpf){
        http.get('',{
            params:{
                cpf: cpf
            }
        })
    }
}