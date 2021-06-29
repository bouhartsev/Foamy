<template>
    <div>
        <h2>Genres</h2>
        <p v-if="genres == null">Loading data error</p>
        <p v-else-if="genres.length === 0">There are no genres.</p>
        <v-container v-else>
            <v-layout row wrap>
                <v-flex xs12 sm6 md4 class="px-9 py-2" style="box-sizing: border-box;" v-for="(genre) in genres" :key="genre.id">
                    <v-lazy min-height="50" :options="{ threshold: .2 }">
                    <v-card link :to="'/genres/'+genre.id" class="">
                        <v-card-title>{{genre.name}}</v-card-title>
                    </v-card>
                    </v-lazy>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "Genres",
    computed: {
        genres() {
            return this.$store.state.dataAPI['genres'];
        },
    },
}
</script>
