import Router from 'vue-router'

import StateList from '@/components/StateList'
import About from '@/components/About'

// associate base URL path with the StateList component
// sets app home page
export default new Router({
    routes: [
        {
            path: '/',
            component: StateList
        },
        {
            path: '/about',
            component: About
        }
    ]
})