<template>
    <v-app>
        <v-hover v-slot="{ hover }">
            <NavigationDrawer ref="nav" :navIsHover="hover"/>
        </v-hover>

        <AppBar></AppBar>

        <v-main>
            <v-container fluid>
                <router-view/>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import NavigationDrawer from "./components/NavigationDrawer";
import AppBar from "./components/AppBar";

export default {
    components: {NavigationDrawer, AppBar},
    // computed:{
    //     theme(){
    //         return (this.$vuetify.theme.dark) ? 'dark' : 'light';
    //     }
    // },
    // TODO: make theme session and browser default
    data() {
        return {
            openSearch: false,
        }
    },
    created() {
        [
            'tracks',
            'artists',
            'releases',
            'genres',
            'playlists',
        ].forEach(path => {
            this.$getDataAPI(path);
        });
    },
    methods: {
        //
    }
}
</script>

<style lang="scss">
h2 {
    text-align: center;
}

.v-card__title {
    word-break: break-word;
}
</style>