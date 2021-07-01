<template>
    <div>
        <h2>
            <slot name="heading"></slot>
        </h2>
        <p v-if="data === null">Loading data error</p>
        <p v-else-if="isEmpty">There are no data</p>
        <v-container v-else-if="data" :style="'text-align: '+((isLoading)?'center':'inherit')">
            <v-progress-circular v-if="isLoading" indeterminate color="primary"></v-progress-circular>
            <v-layout row wrap>
                <v-flex xs12 sm6 md4 class="px-9 py-2" style="box-sizing: border-box;" v-for="(item) in data" :key="item.id">
                    <v-lazy :min-height="(minimal)?50:200" :options="{ threshold: .2 }">
                    <v-card link :to="'/'+url+'/'+item.id" class="">
                        <v-img v-if="!minimal" :src="get_poster(image_src(item), image_placeholder)" aspect-ratio="1.5"></v-img>
                        <!--for artists-->
                        <v-card-title v-if="item.pseudonym">{{item.pseudonym}}</v-card-title>
                        <v-card-title v-else-if="item.name">{{item.name}}</v-card-title>
                        <!--for artists-->
                        <v-card-subtitle v-if="item.pseudonym">{{item.name}}</v-card-subtitle>
                        <!--for tracks and releases-->
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

<style scoped>

</style>