<template>
    <div>
        <h2 v-if="$slots.heading"><slot name="heading"></slot></h2>
        <slot name="additional"></slot>
        <p v-if="data === null" class="text-center">Loading data error</p>
        <p v-else-if="isEmpty" class="text-center">There are no data</p>
        <v-container v-else-if="data" :class="((isLoading)?'text-center':'')">
            <v-progress-circular v-if="isLoading" indeterminate color="primary"></v-progress-circular>
            <v-layout row>
                <v-flex xs12 sm6 md4 class="px-9 py-2" style="box-sizing: border-box;" v-for="(item) in data" :key="item.id">
                    <v-lazy :min-height="(minimal)?50:200" :options="{ threshold: .2 }">
                    <v-card link :to="'/'+url+'/'+item.id" class="">
                        <v-img v-if="!minimal" :src="get_poster(image_src(item), image_placeholder)" aspect-ratio="1.5">
<!--                            <template #placeholder>-->
<!--                                <v-img :src="'/static/img/placeholder/'+image_placeholder"></v-img>-->
<!--                            </template>-->
                        </v-img>
                        <!--for artists-->
                        <v-card-title v-if="item.pseudonym">{{item.pseudonym}}</v-card-title>
                        <v-card-title v-else-if="item.name">{{item.name}}</v-card-title>
                        <!--for artists-->
                        <v-card-subtitle v-if="item.pseudonym">{{item.name}}</v-card-subtitle>
                        <!--for releases-->
                        <v-card-subtitle v-if="url=='releases'&&item.tracks">{{ (item.tracks.length==1)?'single':'album' }}</v-card-subtitle>
                        <!--for tracks-->
                        <v-card-subtitle v-if="item.artistsData"><router-link title="Go to artist" v-for="(artist, index) in item.artistsData" :key="index" :to="'/artists/'+artist.id">{{ get_artist(artist) }}<span v-if="index!=(item.artistsData.length-1)">, </span></router-link></v-card-subtitle>
                    </v-card>
                    </v-lazy>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "Cards",
    computed: {
        isLoading() {
            return JSON.stringify(this.data) == JSON.stringify({});
        },
        isEmpty() {
            return JSON.stringify(this.data) == JSON.stringify([]);
        },
    },
    props: {
        data: [Object, Array],
        image_src_key: String,
        image_placeholder: String,
        minimal: Boolean,
        url: String,
    },
    methods: {
        image_src: function(item) {
            if (this.image_src_key)
                return item[this.image_src_key];
            else return [item,];
        },
    }
}
</script>