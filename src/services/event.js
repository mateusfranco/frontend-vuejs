import { http } from './config'

export default{
    List(url, email, token){
        return http.post(url,{
            email: email,
            token: token
        })
    },
    add(url, name, location, coverage_area, date_start, date_end, description, coodinator, token){
        return http.post(url,{
            name: name,
            location: location,
            coverage_area: coverage_area,
            date_start: date_start,
            date_end: date_end,
            description: description,
            coodinator: coodinator,
            token: token
        })
    },
    remove(url, email, token){
        
    }
}
