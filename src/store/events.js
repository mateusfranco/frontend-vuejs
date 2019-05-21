export default{
    namespaced: true,

    state: {
        events: [], 
    },

    mutations: {
        addEvent (state, event) {
          state.events.push(event) 
        },
        removeEvent (state, event) {
            let index
            for (let i = 0; i < state.events.length; i++) {
                if(state.events[i].id == event.id){
                    index = i
                }
            }
            state.events.slice(index,1)
        },
    },
    actions: {
    
    },
    getters: {
        login: state => state.events
    }

}
