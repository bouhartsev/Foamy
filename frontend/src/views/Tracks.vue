<template>
    <div>
        <h1>Tracks</h1>
        <p v-if="tracks === null">There are no tracks.</p>
        <v-container>
            <v-layout row wrap>
                <v-flex xsl0 sm6 md4 v-for="track in tracks" :key="track.id">
                    <v-card>
                        <v-card-title>{{track.name}}</v-card-title>
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
            return this.$store.state.dataAPI;
        }
    },
    mounted() {
        this.$getDataAPI('tracks');
    },
};
</script>