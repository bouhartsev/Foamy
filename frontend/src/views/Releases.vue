<template>
    <Cards :data="requestedData" image_placeholder="release.png" :url="request">
        <template #heading>Releases</template>
    </Cards>
</template>

<script>
import Cards from "../components/Cards";

export default {
    name: "Releases",
    components: {
        Cards,
    },
    data() {
        return {
            request: 'releases',
        }
    },
    computed: {
        requestedData() {
            return this.$store.state.dataAPI[this.request];
        },
    },
}
</script>