import Router from 'vue-router'

// import the below components
import StateList from '@/components/StateList'
import About from '@/components/About'
import StateDetail from '@/components/StateDetail'

// associate base URL path with the StateList component
// sets app home page
export default new Router({
    routes: [
        {
            // Linked to StateList component
            path: '/',
            component: StateList
        },
        {
            // linked to About component
            path: '/about',
            component: About
        },
        {
            // :state allows this path to be used for every state
            path: '/detail/:state',
            name: 'detail',
            component: StateDetail
        }
    ]
})