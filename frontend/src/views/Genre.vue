<template>
    <Instance :data="genreData" list_key="tracksData" minimal>
        <template #heading>Genre</template>
    </Instance>
</template>

<script>
import Instance from "../components/Instance";

export default {
    name: "Genre",
    components: {
        Instance,
    },
    data() {
        return {
            request: 'genres/',
        }
    },
    computed: {
        genreData() {
            return this.$store.state.dataAPI[this.request];
        },
    },
    mounted() {
        this.request+=this.$route.params.id;
        this.$getDataAPI(this.request);
    },
}
</script>