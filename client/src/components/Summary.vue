<template>
    <div class="summary">
        <!--get the total number of states from below and call the statesPlural method-->
        <h3>You have visited {{ total }} {{ statesPlural }}</h3>

        <p id="visited-all" v-if="visitedAll">
            You have visited all 50 states and the District of Columbia
        </p>
    </div>
</template>

<script>
    export default {
        name: "Summary",
        props: {
            total: Number,
            visitedAll: Boolean
        },
        computed: {
            statesPlural() {
                // return either singular or plural depending on if all states have been visited
                return this.total === 1 ? 'state' : 'states'
            }
        }
    }
</script>

<style scoped>
#visited-all{
    color: #be8234;
    font-weight: 600;
}
</style>