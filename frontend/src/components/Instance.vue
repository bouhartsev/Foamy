<template>
    <div>
        <h2 v-if="$slots.heading"><slot name="heading"></slot></h2>
        <p v-if="data === null">Loading data error</p>
        <v-container v-else-if="data !== undefined && ('id' in data)" :style="'text-align: '+((isLoading)?'center':'inherit')">
            <v-img v-if="!minimal" :src="get_poster(image_src, image_placeholder)"></v-img>
            <h3 class="container__title" v-if="data.pseudonym">"{{ data.pseudonym }}"</h3>
            <h3 class="container__title" v-else-if="data.name&&!minimal">"{{ data.name }}"</h3>
            <slot name="paragraphs"></slot>

            <v-progress-circular v-if="isLoading" indeterminate color="primary"></v-progress-circular>
            <p v-else-if="isEmpty">There are no data for {{ data.name }}</p>
            <v-list shaped v-else-if="list">
                <v-subheader>
                    <slot name="list_heading" v-if="!minimal">Tracks</slot>
                    <h3 class="container__title" v-else-if="data.name">{{ data.name.charAt(0).toUpperCase() + data.name.slice(1) }}</h3>
                </v-subheader>
                <v-list-item-group>
                    <v-list-item v-for="(track) in list" :key="track.id" link :to="'/'+url+'/'+track.id">
                        <v-list-item-icon>
                            <v-icon>play_arrow</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>{{ track.name }}</v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-list-item-subtitle v-if="track.duration != null">{{ get_duration(track.duration) }}</v-list-item-subtitle>
                        </v-list-item-action>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "Instance",
    computed: {
        image_src() {
            if (this.image_src_key)
                return this.data[this.image_src_key];
            else return [this.data,];
        },
        list() {
            if (this.list_src) return this.list_src;
            else if (this.list_key) return this.data[this.list_key];
            else return false;
        },
        isLoading() {
            return JSON.stringify(this.list_src) == JSON.stringify({});
        },
        isEmpty() {
            return JSON.stringify(this.list) == JSON.stringify([])
        },
        url() {
            console.log(this.url_prop);
            if (this.url_prop) return this.url_prop;
            else return 'tracks';
        },
    },
    props: {
        data: [Object, Array],
        image_src_key: String,
        image_placeholder: String,
        list_src: [Object, Array],
        list_key: String,
        list_heading: String,
        minimal: Boolean,
        url_prop: String,
    },

}
</script>

<style scoped>
.container__title {
    margin-bottom: 16px;
}

.v-image {
    float: right;
    width: 30%;
    margin-left: 15px;
    margin-bottom: 15px;
}

.v-list {
    clear: right;
}

p {
    white-space: pre-line;
}

</style>