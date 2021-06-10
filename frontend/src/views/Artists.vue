<template>
    <div>
        <h2>Artists</h2>
        <p v-if="artists === null">Loading data error</p>
        <p v-else-if="artists.length === 0">There are no artists.</p>
        <v-container>
            <v-layout row wrap>
                <v-flex xs12 sm6 md4 class="px-9 py-2" style="box-sizing: border-box;" v-for="(artist) in artists" :key="artist.id">
                    <v-lazy transition="fade-transition">
                    <v-card link :to="'/artists/'+artist.id">
                        <v-img :src="artist.photo" height="200"></v-img>
                        <v-card-title v-if="artist.pseudonym==''">{{artist.name}}</v-card-title>
                        <v-card-title v-else>{{artist.pseudonym}}</v-card-title>
                        <v-card-subtitle v-if="artist.pseudonym!=''">{{artist.name}}</v-card-subtitle>
                    </v-card>
                    </v-lazy>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "Artists",
    computed: {
        artists() {
            return this.$store.state.dataAPI['artists'];
        },
    },
}
</script>