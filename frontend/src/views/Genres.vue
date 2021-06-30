<template>
    <Cards :data="requestedData" minimal :url="request">
        <template #heading>Genres</template>
    </Cards>
</template>

<script>
import Cards from "../components/Cards";

export default {
    name: "Genres",
    components: {
        Cards,
    },
    data() {
        return {
            request: 'genres',
        }
    },
    computed: {
        requestedData() {
            return this.$store.state.dataAPI[this.request];
        },
    },
}
</script>
