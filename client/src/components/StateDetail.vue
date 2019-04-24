<template>
    <div class="state-detail p-2">
        <h2>The State of {{ state.name }}</h2>
        <!--if the state visited value is true this text will display-->
        <p v-if="state.visited">You have visited this state</p>
        <!--if the state visited value is false this text will display-->
        <p v-else>You have not visited this state</p>
    </div>
</template>

<script>
    export default {
        name: "StateDetail",
        data(){
            return {
                state: {
                    name: ''
                }
            }
        },
        mounted() {
            // will reflect anything after /detail in the route's path
            this.state.name = this.$route.params.state
        }
    }
</script>

<style scoped>

</style>