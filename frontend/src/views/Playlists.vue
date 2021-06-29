<template>
    <div>
        <h2>Playlists</h2>
        <p v-if="playlists == null">Loading data error</p>
        <p v-else-if="playlists.length === 0">There are no playlists.</p>
        <v-container v-else>
            <v-layout row wrap>
                <v-flex xs12 sm6 md4 class="px-9 py-2" style="box-sizing: border-box;" v-for="(playlist) in playlists" :key="playlist.id">
                    <v-lazy min-height="50" :options="{ threshold: .2 }">
                    <v-card link :to="'/playlists/'+playlist.id" class="">
                        <v-card-title>{{playlist.name}}</v-card-title>
                    </v-card>
                    </v-lazy>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "Playlists",
    computed: {
        playlists() {
            return this.$store.state.dataAPI['playlists'];
        },
    },
}
</script>