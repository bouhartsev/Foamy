<template>
    <div>
        <h2>Tracks</h2>
        <p v-if="tracks === null">Loading data error</p>
        <p v-else-if="tracks.length === 0">There are no tracks.</p>
        <v-container>
            <v-layout row wrap>
                <v-flex xs12 sm6 md4 class="px-9 py-2" style="box-sizing: border-box;" v-for="(track) in tracks" :key="track.id">
                    <v-lazy transition="fade-transition">
                    <v-card link :to="'/tracks/'+track.id">
                        <v-img :src="get_poster(track.releaseData)" height="200"></v-img>
                        <v-card-title>{{track.name}}</v-card-title>
                        <v-card-subtitle><router-link title="Go to artist" v-for="(artist, index) in track.artistsData" :to="'/artists/'+artist.id">{{ get_artist(artist) }}<span v-if="index!=(track.artistsData.length-1)">, </span></router-link></v-card-subtitle>
                    </v-card>
                    </v-lazy>
                </v-flex>
            </v-layout>
        </v-container>
    </div>

</template>

<script>
export default {
    name: "Tracks",
    components: this,
    data() {
        return {
            showData: false,
            showError: false,
        }
    },
    computed: {
        tracks() {
            return this.$store.state.dataAPI['tracks'];
        },
    },
    mounted() {
        [
            'tracks',
        ].forEach(path => {
            this.$getDataAPI(path);
        });
    },
    methods: {
        get_artist: function (artist) {
            if (artist.pseudonym!="") return artist.pseudonym;
            else return artist.name;
        },
        get_poster: function (release){
            let poster = 'null';
            if (release.length>0) {
                poster = release[0].poster;
            }
            // console.log(poster);
            return (poster!='null')?poster:(this.$serverAbsolutePath+'/static/img/icons/favicon-32x32.png');
        },
    }
};
</script>