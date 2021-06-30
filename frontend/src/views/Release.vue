<template>
    <Instance :data="releaseData" image_placeholder="release.png" list_key="tracksData">
        <template #heading>Release</template>
    </Instance>
</template>

<script>
import Instance from "../components/Instance";

export default {
    name: "Release",
    components: {
        Instance,
    },
    data() {
        return {
            request: 'releases/',
        }
    },
    computed: {
        releaseData() {
            return this.$store.state.dataAPI[this.request];
        },
    },
    mounted() {
        this.request+=this.$route.params.id;
        this.$getDataAPI(this.request);
    },
}
</script>