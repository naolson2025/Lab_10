<template>
    <div class="state-detail p-2">
        <h2>The State of {{ state.name }}</h2>
        <!--if the state visited value is true this text will display-->
        <p v-if="state.visited">You have visited this state</p>
        <!--if the state visited value is false this text will display-->
        <p v-else>You have not visited this state</p>

        <!--set up the leaflet map-->
        <div id="map-container">
            <l-map
                ref="stateMap"
                style="height: 100%; width: 100%"
                v-bind:zoom="zoom"
                v-bind:center="center">
                <l-tile-layer :url="url"></l-tile-layer>
            </l-map>
        </div>

    </div>
</template>

<script>
    import { LMap, LTileLayer } from 'vue2-leaflet'

    export default {
        name: "StateDetail",
        components: {
            LMap, LTileLayer
        },
        data(){
            return {
                state: {
                    name: ''
                },
                url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
                zoom: 2,
                center: [44, -103],     // start at geographic center of the US
                bounds: null
            }
        },
        mounted() {
            // will reflect anything after /detail in the route's path
            this.state.name = this.$route.params.state;
            // prevents user from dragging away from the state
            // but they can still adjust zoom
            this.$refs.stateMap.mapObject.dragging.disable();
            this.fetchStateData()
        },
        methods: {
            // overwrites state object with data from the server
            fetchStateData(){
                this.$stateService.getOne( this.state.name ).then( data => {
                    this.state = data;
                    this.zoom = data.zoom;
                    this.center = [data.lat, data.lon];
                    // change center coordinates to adjust to state
                    this.$refs.stateMap.mapObject.flyTo(this.center, this.zoom)
                }).catch( err => console.error(err))
            }
        }
    }
</script>

<style scoped>

</style>