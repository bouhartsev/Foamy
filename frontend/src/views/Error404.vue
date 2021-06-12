<template>
    <div class="page404">
        <h2>4<span>O</span>4</h2>
        <p><b>Page not <span>f</span>ound!</b></p>
        <p>Check URL</p>
    </div>
</template>

<script>
export default {
    name: "Error404",
    components: this,
};
</script>

<style scoped lang="scss">
.page404 {
    text-align: center;
    span {
        font-family: 'Tchaikovsky';
        margin-right: -0.3em;
        margin-left: 0.05em;
    }

    h2 {
        font-size: 5em;

    }
}
</style>