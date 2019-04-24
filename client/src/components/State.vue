<template>
    <div class="state-summary p-2 rounded">
        <span class="m-2">{{ state.name }}</span>
        <p>
            <!--when is visited gets clicked the changed data is sent to the parent-->
            <input id="visited" class="m-2" type="checkbox"
            v-model="stateVisited" v-on:change="$emit('isVisited', stateName, stateVisited)">
        </p>
    </div>
</template>

<script>
    export default {
        name: "State",
        props: {
            state: Object
        },
        data(){
            return {
                stateName: this.state.name,
                stateVisited: this.state.visited
            }
        }
    }
</script>

<style scoped>
    .state-summary {
        height: 8em;
        width: 10em;
        border: 1px #EEE solid;
        background-color: whitesmoke;
    }
</style>