<template>
    <Cards :data="requestedData" image_placeholder="track.png" image_src_key="releaseData" :url="request">
        <template #heading>Tracks</template>
    </Cards>
</template>

<script>
import Cards from "../components/Cards";

export default {
    name: "Tracks",
    components: {
        Cards,
    },
    data() {
        return {
            request: 'tracks',
        }
    },
    computed: {
        requestedData() {
            return this.$store.state.dataAPI[this.request];
        },
    },
};
</script>