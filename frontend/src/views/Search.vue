<template>
    <Instance :data="{'id': 0,}" :list_src="searchData" minimal>
        <template #heading>Searching for <i>"{{ request }}"</i></template>
<!--        <template #paragraphs>{{ searchData }}</template>-->
    </Instance>
</template>

<script>
import Instance from "../components/Instance";

export default {
    name: "Search",
    components: {
        Instance,
    },
    computed: {
        searchData() {
            let tracks = [];
            if (this.tracks.length) {
                tracks = this.tracks;
                let result = tracks.filter(x => x.name.toLowerCase().indexOf(this.request.toLowerCase()) !== -1);
                return result;
            }
            else return {};
        },
        tracks() {
            return this.$store.state.dataAPI['tracks'];
        },
        request() {
            return this.$route.query['query'];
        },
    },
}
</script>

<style scoped>

</style>