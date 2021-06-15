<template>
    <div>
        <h2>Track: {{ trackId }}</h2>
        <p v-if="trackData === null">Loading data error</p>
        <p>{{ trackData }}</p>

    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name: "Track",
    components: this,
    data() {
        //
    },
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

</style>