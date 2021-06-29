<template>
    <div>
        <h2>Track</h2>
        <p v-if="trackData === null">Loading data error</p>
        <v-container v-else-if="trackData !== undefined && 'id' in trackData">
            <v-img :src="get_poster(trackData.releaseData, 'track.png')"></v-img>
            <h3 class="container__title">"{{ trackData.name }}"</h3>
            <p>Artists: <router-link title="Go to artist" v-for="(artist, index) in trackData.artistsData" :key="index" :to="'/artists/'+artist.id">{{ get_artist(artist) }}<span v-if="index!=(trackData.artistsData.length-1)">, </span></router-link></p>
            <p v-if="trackData.release.length > 0">Release: <router-link title="Go to release" :to="'/releases/'+trackData.releaseData[0].id">{{ trackData.releaseData[0].name }}</router-link></p></p>
            <p v-if="trackData.genre.length > 0">Genre: <router-link title="Go to genre" v-for="(genre, index) in trackData.genreData" :key="index" :to="'/genres/'+genre.id">{{ genre.name }}<span v-if="index!=(trackData.genreData.length-1)">, </span></router-link></p>
            <p v-if="trackData.duration != null">Duration: <span v-if="~~(trackData.duration/3600)>0">{{ ~~(trackData.duration/3600) }}:</span><span>{{ ~~(trackData.duration/60)%3600 }}:</span><span>{{ trackData.duration%60 }}</span></p>
        </v-container>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name: "Track",
    components: this,
    computed: {
        trackData() {
            return this.$store.state.dataAPI['tracks/'+this.$route.params.id];
        },
    },
    mounted() {
        this.$getDataAPI('tracks/'+this.$route.params.id);
    },
}
</script>

<style scoped>
.container__title {
    margin-bottom: 16px;
}

.v-image {
    float: right;
    width: 30%;
    margin-left: 15px;
}
</style>