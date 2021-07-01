import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Search from "../views/Search.vue";

import Tracks from "../views/Tracks.vue";
import Track from "../views/Track.vue";
import Artists from "../views/Artists.vue";
import Artist from "../views/Artist.vue";
import Releases from "../views/Releases.vue";
import Release from "../views/Release.vue";
import Genres from "../views/Genres.vue";
import Genre from "../views/Genre.vue";
import Playlists from "../views/Playlists.vue";
import Playlist from "../views/Playlist.vue";

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
        path: "/search",
        name: "Search",
        component: Search,
    },

    {
        path: "/tracks",
        component: {
            render: (h) => h("router-view"),
        },
        children: [
            {
                path:"",
                name: "Tracks",
                component: Tracks,
            },
            {
                path: "/tracks/:id",
                name: "Track",
                component: Track,
            },
        ]
    },
    {
        path: "/artists",
        component: {
            render: (h) => h("router-view"),
        },
        children: [
            {
                path:"",
                name: "Artists",
                component: Artists,
            },
            {
                path: "/artists/:id",
                name: "Artist",
                component: Artist,
            },
        ]
    },
    {
        path: "/releases",
        component: {
            render: (h) => h("router-view"),
        },
        children: [
            {
                path:"",
                name: "Releases",
                component: Releases,
            },
            {
                path: "/releases/:id",
                name: "Release",
                component: Release,
            },
        ]

    },
    {
        path: "/genres",
        component: {
            render: (h) => h("router-view"),
        },
        children: [
            {
                path:"",
                name: "Genres",
                component: Genres,
            },
            {
                path: "/genres/:id",
                name: "Genre",
                component: Genre,
            },
        ]
    },
    {
        path: "/playlists",
        component: {
            render: (h) => h("router-view"),
        },
        children: [
            {
                path:"",
                name: "Playlists",
                component: Playlists,
            },
            {
                path: "/playlists/:id",
                name: "Playlist",
                component: Playlist,
            },
        ]
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
    scrollBehavior(to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
});

router.beforeEach(async (to, from, next) => {
    //const { title } = to.meta;
    let title = '';
    // if (to.meta.breadcrumb) title = to.meta.breadcrumb;
    title = to.name;
    const brand = "Foamy";
    document.title = `${title ? title + " | " : ""}${brand}`;
    next();
});

export default router;
