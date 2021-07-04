<template>
    <v-navigation-drawer v-model="navIsActive" app v-bind:expand-on-hover="navIsOnHover" mobile-breakpoint="768" tag="nav">
        <v-list>
            <v-list-item>
                <a href="/" style="color: inherit; text-decoration: inherit;">
                    <v-list-item-title class="title">
                        <h1 v-if="(!navIsOnHover || navIsHover)&&footerVisible">F<span>o</span>amy </h1>
                        <h1 v-else><span>o</span></h1>
                    </v-list-item-title>
                    <v-list-item-subtitle :style="'text-transform: uppercase; opacity: '+(((!navIsOnHover || navIsHover)&&footerVisible)?'1':'0')">for you</v-list-item-subtitle>
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
                    <v-icon>radio</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Genres</v-list-item-title>
            </v-list-item>
            <v-list-item link :to="{name: 'Playlists'}">
                <v-list-item-icon>
                    <v-icon>queue_music</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Playlists</v-list-item-title>
            </v-list-item>
        </v-list>

        <v-container slot="append" class="navFooter" v-show="(!navIsOnHover || navIsHover)&&footerVisible">
            <v-list dense style>
                <v-list-item link href="//github.com/bouhartsev/Foamy/" target="_blank">
                    GitHub
                </v-list-item>
                <v-list-item link to="/admin/" target="_blank">
                    Admin
                </v-list-item>
                <v-list-item link to="/api/" target="_blank">
                    API
                </v-list-item>
                <v-list-item link href="mailto:programmer@bouhartsev.top?subject=Foamy Support" target="_blank">
                    Support
                </v-list-item>
            </v-list>
            <v-container>
                <a href="//bouhartsev.top/" target="_blank">Matvey Bouhartsev</a> © 2021<br>
                Made for <a href="//mospolytech.ru/" target="_blank">MosPolytech</a>
            </v-container>
        </v-container>

    </v-navigation-drawer>
</template>

<script>
import NavigationDrawer from "@/components/NavigationDrawer.vue";

export default {
    name: "NavigationDrawer",
    data() {
        return {
            navIsOnHover: false,
            navIsActive: false,
            footerVisible: true,
        }
    },
    props: {
        navIsHover: Boolean,
    },
    created() {
        if (window.innerWidth > 768) this.navIsActive = true;
        window.addEventListener("resize", this.resizeFunc);
    },
    destroyed() {
        window.removeEventListener("resize", this.resizeFunc);
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
        resizeFunc: function(event) {
            if (window.innerHeight < 400) this.footerVisible = false;
            else this.footerVisible = true;
        },
    }
}
</script>

<style scoped lang="scss" >

@font-face {
    font-family: 'Tchaikovsky';
    src: url('~@/assets/Tchaikovsky.ttf') format('truetype');
}
@font-face {
    font-family: 'SongFont';
    src: url('~@/assets/SongFont.ttf') format('truetype');
}

.v-application--is-ltr {
    .v-list-item__action:first-child, .v-list-item__icon:first-child {
        margin-right: 15px;
    }
}
.v-list-item__icon {
    .v-icon {
        width: 100%;
    }
}

.navFooter {
    font-size: 0.8em;
    min-width: max-content;
}

h1 {
    font-size: 2.5em;
    font-family: 'SongFont';
}

h1 span {
    font-family: 'Tchaikovsky';
    margin-right: -0.25em;
    vertical-align: bottom;
    color: #00bfff;
}

.title {
    overflow:visible;
}

</style>