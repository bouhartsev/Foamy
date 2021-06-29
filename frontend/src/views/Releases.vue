<template>
    <div>
        <h2>Releases</h2>
        <p v-if="releases === null">Loading data error</p>
        <p v-else-if="releases.length === 0">There are no releases.</p>
        <v-container v-else>
            <v-layout row wrap>
                <v-flex xs12 sm6 md4 class="px-9 py-2" style="box-sizing: border-box;" v-for="(release) in releases" :key="release.id">
                    <v-lazy min-height="200" :options="{ threshold: .1 }">
                    <v-card link :to="'/releases/'+release.id" class="">
                        <v-img :src="get_poster([release,], 'release.png')" aspect-ratio="1.5"></v-img>
                        <v-card-title>{{release.name}}</v-card-title>
                        <v-card-subtitle><router-link title="Go to artist" v-for="(artist, index) in release.artistsData" :key="index" :to="'/artists/'+artist.id">{{ get_artist(artist) }}<span v-if="index!=(release.artistsData.length-1)">, </span></router-link></v-card-subtitle>
                    </v-card>
                    </v-lazy>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "Releases",
    computed: {
        releases() {
            return this.$store.state.dataAPI['releases'];
        },
    },
}
</script>