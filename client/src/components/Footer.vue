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

        <p class="text-right p-2">Header image by Unsplash</p>
    </div>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>

<style scoped>

</style>