<template>
    <div>
        <h1>Tracks</h1>
        <p v-if="tracks === null">Loading data error</p>
        <p v-else-if="tracks.length === 0">There are no tracks.</p>
        <v-container>
            <v-layout row wrap>
                <v-flex xs12 sm6 md4 v-for="track in tracks" :key="track.id" class="px-9 py-2" style="box-sizing: border-box;">
                    <v-card link :to="{path: ''+track.id}">
                        <v-card-title>{{track.name}}</v-card-title>
                        <v-card-subtitle><a v-for="(id, index) in track.artists" :key="id" :href="'/artsits/'+id">{{ get_artist(id) }}<span v-if="index!=(track.artists.length-1)">, </span></a></v-card-subtitle>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "Tracks",
    components: this,
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