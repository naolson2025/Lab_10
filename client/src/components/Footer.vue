<template>
    <div class="footer">
        <div class="m-2">
            <!--Link to the index.js router path designated-->
            <!--Router links turn into links to navigate within app-->
            <span class="p-3">
                <router-link to="/">Home</router-link>
            </span>

            <span class="p-3">
                <router-link to="/about">About this site</router-link>
            </span>
        </div>

        <p class="text-right p-2">Header image by
            <a href="https://unsplash.com/photos/TrhLCn1abMU">@dead____artist on Unsplash</a>
            <br>
            <a href="https://img.icons8.com/cotton/64/000000/world-map.png">Map icon by Icons8</a>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>

<style scoped>
.credit{
    font-size: 0.1em;
    font-style: italic;
}
</style>