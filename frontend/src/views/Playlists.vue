<template>
    <Cards :data="requestedData" minimal :url="request">
        <template #heading>Playlists</template>
    </Cards>
</template>

<script>
import Cards from "../components/Cards";

export default {
    name: "Playlists",
    components: {
        Cards,
    },
    data() {
        return {
            request: 'playlists',
        }
    },
    computed: {
        requestedData() {
            return this.$store.state.dataAPI[this.request];
        },
    },
}
</script>