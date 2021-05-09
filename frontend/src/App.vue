<template>
    <v-app>
        <!--        <div id="nav">-->
        <!--            <router-link :to="{ name: 'Home' }">Home</router-link>-->
        <!--            <router-link :to="{ name: 'About' }">About</router-link>-->

        <!--            <router-link :to="{ name: 'Tracks' }">Tracks</router-link>-->
        <!--        </div>-->

        <v-navigation-drawer v-model="navIsActive" app v-bind:expand-on-hover="navIsOnHover" mobile-breakpoint="768"
                             tag="nav">
            <v-list>
                <v-list-item>
                    <a href="/" style="color: inherit; text-decoration: inherit;">
                    <v-list-item-content>
                        <v-list-item-title class="title">
                            <h1>Foamy </h1>
                        </v-list-item-title>
                        <v-list-item-subtitle style="text-transform: uppercase">for you</v-list-item-subtitle>
                    </v-list-item-content>
                    </a>
                </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list nav dense>
                <v-list-item link :to="{name: 'Tracks'}">
                    <v-list-item-icon>
                        <v-icon>fa-music</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Tracks</v-list-item-title>
                </v-list-item>
                <v-list-item link :to="{name: 'Artists'}">
                    <v-list-item-icon>
                        <v-icon>fa-microphone-alt</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Artists</v-list-item-title>
                </v-list-item>
                <v-list-item link :to="{name: 'Releases'}">
                    <v-list-item-icon>
                        <v-icon>fa-compact-disc</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Releases</v-list-item-title>
                </v-list-item>
                <v-list-item link :to="{name: 'Genres'}">
                    <v-list-item-icon>
                        <v-icon>fa-guitar</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Genres</v-list-item-title>
                </v-list-item>
                <v-list-item link :to="{name: 'Playlists'}">
                    <v-list-item-icon>
                        <v-icon>fa-clipboard-list</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Playlists</v-list-item-title>
                </v-list-item>
            </v-list>

            <v-container slot="append" class="navFooter">
                <v-list dense style>
                    <v-list-item link to="/api/" target="_blank">
                        API
                    </v-list-item>
                    <v-list-item link href="//github.com/bouhartsev/Foamy/" target="_blank">
                        GitHub
                    </v-list-item>
                    <v-list-item link href="mailto:programmer@bouhartsev.top" target="_blank">
                        Support
                    </v-list-item>
                </v-list>
                <v-container slot="append">
                    <a href="//bouhartsev.top/" target="_blank">Matvey Bouhartsev</a> © 2021<br>
                    Made for <a href="//mospolytech.ru/" target="_blank">MosPolytech</a>
                </v-container>
            </v-container>

        </v-navigation-drawer>

        <v-app-bar app>
            <v-app-bar-nav-icon @click="burger_click"></v-app-bar-nav-icon>

            <!--            <v-toolbar-title>Application</v-toolbar-title>-->
        </v-app-bar>
        <v-main>
            <v-container fluid>
                <router-view/>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            navIsOnHover: false,
            navIsActive: false,
        }
    },
    created() {
        if (window.innerWidth > 768) this.navIsActive = true;
    },
    methods: {
        burger_click: function (event) {
            if (window.innerWidth > 768) {
                this.navIsOnHover = !this.navIsOnHover;
                this.navIsActive = true;
            } else {
                this.navIsOnHover = false;
                this.navIsActive = !this.navIsActive;
            }
        },
    }
}
</script>

<style lang="scss" scoped>

.v-application--is-ltr .v-list-item__action:first-child, .v-application--is-ltr .v-list-item__icon:first-child {
    margin-right: 15px;
}
.v-list-item__icon>.v-icon {
    width: 100%;
}
.navFooter {
    font-size: 0.8em;

    a {
        color: inherit;
    }
}

</style>