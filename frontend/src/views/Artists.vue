<template>
    <Cards :data="requestedData" image_placeholder="artist.png" :url="request">
        <template #heading>Artists</template>
    </Cards>
</template>

<script>
import Cards from "../components/Cards";

export default {
    name: "Artists",
    components: {
        Cards,
    },
    data() {
        return {
            request: 'artists',
        }
    },
    computed: {
        requestedData() {
            return this.$store.state.dataAPI[this.request];
        },
    },
}
</script>