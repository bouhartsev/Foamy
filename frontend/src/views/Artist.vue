<template>
    <Instance :data="artistData" image_placeholder="artist.png" list_key="tracksData">
        <template #heading>Artist</template>
        <template #paragraphs>
            <p v-if="artistData.pseudonym">Real name: {{ artistData.name }}</p>
            <p v-if="artistData.type">Type of artist: {{ artistData.type }}</p>
            <p v-if="artistData.biography"><b>Biography:</b><br>{{ artistData.biography }}</p>
        </template>
    </Instance>
</template>

<script>
import Instance from "../components/Instance";

export default {
    name: "Artist",
    components: {
        Instance,
    },
    computed: {
        artistData() {
            return this.$store.state.dataAPI['artists/'+this.$route.params.id];
        },
    },
    mounted() {
        this.$getDataAPI('artists/'+this.$route.params.id);
    },
}
</script>

<style scoped>

</style>