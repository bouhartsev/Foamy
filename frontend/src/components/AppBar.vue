<template>
    <v-app-bar app>
<!--         color="secondary"-->
        <v-app-bar-nav-icon @click="$parent.$parent.$refs.nav.burger_click()"></v-app-bar-nav-icon>
        <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <v-btn icon :to="{ name: 'Home' }" exact v-bind="attrs" v-on="on">
                    <v-icon>fa-home</v-icon>
                </v-btn>
            </template>
            <span>Home</span>
        </v-tooltip>
        <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <v-btn icon :to="{ name: 'About' }" exact v-bind="attrs" v-on="on">
                    <v-icon>help</v-icon>
                </v-btn>
            </template>
            <span>About</span>
        </v-tooltip>

        <v-spacer></v-spacer>

        <Search style="flex: 0.1 1 auto;" v-show="$vuetify.breakpoint.smAndUp" :search_value.sync="search_value"></Search>
        <v-btn icon v-show="$vuetify.breakpoint.xsOnly" @click="openSearch=true">
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-dialog
            v-model="openSearch"
            hide-overlay
            transition="slide-y-transition"
            :value="$vuetify.breakpoint.xs"
        >
            <v-card v-show="$vuetify.breakpoint.xsOnly">
                <v-container>
                <Search autofocus :search_value.sync="search_value"></Search>
                </v-container>
            </v-card>
        </v-dialog>

        <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <v-btn icon @click="changeTheme" exact v-bind="attrs" v-on="on">
                    <v-icon>mdi-theme-light-dark</v-icon>
                </v-btn>
            </template>
            <span>Theme</span>
        </v-tooltip>
    </v-app-bar>
</template>

<script>
import Search from "./Search";

export default {
    name: "AppBar",
    components: {Search,},
    data() {
        return {
            openSearch: false,
            search_value: '',
        }
    },
    mounted() {
        if (this.$router.currentRoute.name=='Search') {
            if (this.$route.query['query']!=this.search_value)
                this.search_value = this.$route.query['query'];
        }
        else this.search_value = '';
    }
}
</script>

<style scoped>
.v-dialog__content {
    align-items: start;
}
</style>