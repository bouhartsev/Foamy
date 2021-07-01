<template>
    <Instance :data="trackData" image_src_key="releaseData" image_placeholder="track.png">
        <template #heading>Track</template>
        <template #paragraphs>
            <p v-if="trackData.artistsData.length > 0">Artists: <router-link title="Go to artist" v-for="(artist, index) in trackData.artistsData" :key="index" :to="'/artists/'+artist.id">{{ get_artist(artist) }}<span v-if="index!=(trackData.artistsData.length-1)">, </span></router-link></p>
            <p v-if="trackData.release.length > 0">Release: <router-link title="Go to release" :to="'/releases/'+trackData.releaseData[0].id">{{ trackData.releaseData[0].name }}</router-link></p>
            <p v-if="trackData.genre.length > 0">Genre: <router-link title="Go to genre" v-for="(genre, index) in trackData.genreData" :key="index" :to="'/genres/'+genre.id">{{ genre.name }}<span v-if="index!=(trackData.genreData.length-1)">, </span></router-link></p>
            <p v-if="trackData.duration != null">Duration: {{ get_duration(trackData.duration) }}</span></p>
        </template>
    </Instance>
</template>

<script>
import Instance from "../components/Instance";

export default {
    name: "Track",
    components: {
        Instance,
    },
    data() {
        return {
            request: 'tracks/',
        }
    },
    computed: {
        trackData() {
            return this.$store.state.dataAPI[this.request];
        },
    },
    mounted() {
        this.request+=this.$route.params.id;
        this.$getDataAPI(this.request);
    },
}
</script>