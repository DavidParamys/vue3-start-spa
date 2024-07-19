<template>
    <div id="content" class="container">
        <h1 class="emphasize">page.pageTitle</h1>
        <p>{{ $route.params.index }}</p>
    </div>
</template>

<script>
export default {
    created() {
        // console.log(this.$route.params)
    }
}
</script>

<style scoped>
.emphasize {
    color: blue;
}
</style>