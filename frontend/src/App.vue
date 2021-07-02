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
    data() {
        return {
            openSearch: false,
        }
    },
    created() {
        this.instancesList.forEach(path => {
            this.$getDataAPI(path);
        });
        if (window.matchMedia("(prefers-color-scheme: dark)").matches || sessionStorage['theme']=='dark') {
          this.changeTheme();
        }
    },
}
</script>

<style lang="scss">
@import "assets/main.scss";

h2 {
    text-align: center;
}

.v-card__title {
    word-break: break-word;
}

.v-progress-circular {
    margin-top: 50px;
}
</style>