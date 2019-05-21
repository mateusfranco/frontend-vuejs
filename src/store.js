import Vue from 'vue'
import Vuex from 'vuex'
import login from '@/store/login'
import event from '@/store/events'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        login,
        event
    }
})
