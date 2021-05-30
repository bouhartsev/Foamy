<template>
    <div>
        <h1>Tracks</h1>
        <p v-if="tracks === null">Loading data error</p>
        <p v-else-if="tracks.length === 0">There are no tracks.</p>
        <v-container>
            <v-layout row wrap>
                <v-flex xs12 sm6 md4 class="px-9 py-2" style="box-sizing: border-box;" v-for="(track) in tracks" :key="track.id">
                    <v-lazy transition="fade-transition">
                    <v-card :href="''+track.id">
                        <v-img :src="'https://bad.src/not/valid'" lazy-src="https://drasler.ru/wp-content/uploads/2019/05/Скачать-обои-на-рабочий-стол-музыка-рок014.jpg" height="200"></v-img>
                        <v-card-title>{{track.name}}</v-card-title>
                        <v-card-subtitle><a title="Go to artist" v-for="(id, index) in track.artists" :href="'/artsits/'+id">{{ get_artist(id) }}<span v-if="index!=(track.artists.length-1)">, </span></a></v-card-subtitle>
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
        artists() {
            return this.$store.state.dataAPI['artists'];
        },
    },
    mounted() {
        [
            'tracks',
            'artists',
        ].forEach(path => {
            this.$getDataAPI(path);
        });
    },
    methods: {
        get_artist: function (id=1) {
            let temp = Object.values(this.artists).find(art => art.id===id);
            if (temp.pseudonym!="") return temp.pseudonym;
            else return temp.name;
        },
    }
};
</script>