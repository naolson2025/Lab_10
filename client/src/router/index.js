import Router from 'vue-router'

import StateList from '@/components/StateList'

// associate base URL path with the StateList component
// sets app home page
export default new Router({
    routes: [
        {
            path: '/',
            component: StateList
        }
    ]
})