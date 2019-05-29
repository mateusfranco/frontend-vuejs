import { http } from './apiGraph'

export default{
    graphShow(category ,need ,completed){
        http.get('',{
            params:{
                categoryName: category,
                conqueredHours: completed,
                needHours: need 
            }
        })
    }
}