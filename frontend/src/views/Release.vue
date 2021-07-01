<template>
    <Instance :data="releaseData" image_placeholder="release.png" list_key="tracksData">
        <template #heading>Release</template>
        <template #paragraphs>
            <p>Artists: <router-link title="Go to artist" v-for="(artist, index) in artistsData" :key="index" :to="'/artists/'+artist.id">{{ get_artist(artist) }}<span v-if="index!=(artistsData.length-1)">, </span></router-link></p>
        </template>
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
        artistsData() {
            if (this.releaseData) {
                let unique = [];
                this.releaseData['tracksData'].forEach(
                    track => {
                        track['artistsData'].forEach(
                            artist => {
                                if (JSON.stringify(unique).indexOf(JSON.stringify(artist))==-1) {
                                    unique.push(artist);
                                }
                            }
                        )
                    }
                );
                return unique;
            }
            else return [];
        },

    },
    mounted() {
        this.request+=this.$route.params.id;
        if (!this.$store.state.dataAPI[this.request]) this.$getDataAPI(this.request);
    },
}
</script>