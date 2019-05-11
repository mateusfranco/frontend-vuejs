import { http } from './config'

export default{
    login(url, email, password){
        return http.post(url,{
            email: email,
            password: password
        })
    }
    

}
