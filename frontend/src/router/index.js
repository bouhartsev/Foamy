import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/About.vue";

import Tracks from "../views/Tracks.vue";
import Artists from "../views/Artists.vue";
import Releases from "../views/Releases.vue";
import Genres from "../views/Genres.vue";
import Playlists from "../views/Playlists.vue";

import Error404 from "../views/Error404.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },

    {
        path: "/tracks",
        name: "Tracks",
        component: Tracks,
    },
    {
        path: "/artists",
        name: "Artists",
        component: Artists,
    },
    {
        path: "/releases",
        name: "Releases",
        component: Releases,
    },
    {
        path: "/genres",
        name: "Genres",
        component: Genres,
    },
    {
        path: "/playlists",
        name: "Playlists",
        component: Playlists,
    },

    {
        path: "/page-not-found",
        alias: '*',
        component: Error404,
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach(async (to, from, next) => {
    //const { title } = to.meta;
    const title = to.name;
    const brand = "Foamy";
    document.title = `${title ? title + " | " : ""}${brand}`;
    next();
});

export default router;
