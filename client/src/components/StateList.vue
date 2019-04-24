<template>
    <div id="state-list">

        <Summary
            v-bind:total="totalVisited"
            v-bind:visitedAll="visitedAll"
        ></Summary>


        <!--Flex wrap puts components in grid-->
        <div class="d-flex flex-wrap justify-content-around">
            <div class="p-2" v-for="state in states" v-bind:key="states.name">
                <State
                    v-bind:state="state"
                    v-on:isVisited="updateVisited"
                ></State>
            </div>
        </div>
    </div>
</template>

<script>
    // import State as child component
    import State from "@/components/State";
    // import Summary as child component
    import Summary from '@/components/Summary'

    export default {
        name: "StateList",
        // list child components here
        components: {State, Summary},
        data(){
            return {
                states: [],
            }
        },
        mounted() {
            this.getAll()
        },
        methods: {
            // get the list of states and return the data
            getAll(){
                this.$stateService.getAll().then(data => {
                    this.states = data
                })
            },
            updateVisited(stateName, stateVisited){
                this.$stateService.setVisited(stateName, stateVisited).then(data => {
                    this.getAll()
                })
            }
        },
        // computed methods to find total visited and if all states have been visited
        computed: {
            totalVisited(){
                let visited = this.states.filter(function (state) {
                    return state.visited
                });
                // length of visited array is number of states visited
                return visited.length
            },
            visitedAll(){
                let visited = this.states.filter(function (state) {
                    return state.visited
                });
                return visited.length === this.states.length
            }
        }
    }
</script>

<style scoped>

</style>