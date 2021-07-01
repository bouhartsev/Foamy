<template>
    <Instance :data="playlistData" list_key="tracksData" minimal>
        <template #heading>Playlist</template>
    </Instance>
</template>

<script>
import Instance from "../components/Instance";

export default {
    name: "Playlist",
    components: {
        Instance,
    },
    data() {
        return {
            request: 'playlists/',
        }
    },
    computed: {
        playlistData() {
            return this.$store.state.dataAPI[this.request];
        },
    },
    mounted() {
        this.request+=this.$route.params.id;
        this.$getDataAPI(this.request);
    },
}
</script>