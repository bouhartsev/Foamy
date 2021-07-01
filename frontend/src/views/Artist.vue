<template>
    <Instance :data="artistData" image_placeholder="artist.png" list_key="tracksData">
        <template #heading>Artist</template>
        <template #paragraphs>
            <p v-if="artistData.type">{{ artistData.type }}</p>
            <p v-if="artistData.pseudonym">Real name: {{ artistData.name }}</p>
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
    data() {
        return {
            request: 'artists/',
        }
    },
    computed: {
        artistData() {
            return this.$store.state.dataAPI[this.request];
        },
    },
    mounted() {
        this.request+=this.$route.params.id;
        this.$getDataAPI(this.request);
    },
}
</script>