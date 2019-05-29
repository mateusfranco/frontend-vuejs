import { http } from './apiSubmissionCertify.js'

export default{
    sendFile(file){
        return http.post('/document',file,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
    
}