// makes request to route

import axios from 'axios'

export default {
    getAll(){
        return axios.get('/api/states/').then(response =>{
            return response.data
        })
    },
    // sends a patch request that will be handled by the route in states.js
    setVisited(stateName, visited){
      return axios.patch('/api/state/' + stateName, { visited: visited}).then(response => {
          return response.data
      })
    }

}
