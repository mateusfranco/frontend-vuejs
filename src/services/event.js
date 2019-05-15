import { http } from './apiEvent'

export default{
    list(email, token){
        return http.post('event',{
            email: email,
            token: token
        })
    },
    add(name, location, coverage_area, date_start, date_end, description, coordinator, email, token){
        return http.post('event',{
            name: name,
            location: location,
            coverage_area: coverage_area,
            date_start: date_start,
            date_end: date_end,
            description: description,
            coordinator: String(coordinator),
            email: email,
            token: token
        })
    },
    // remove(email, token){
            
    // }
}
