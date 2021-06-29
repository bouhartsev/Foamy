<template>
    <div>
        <h2>
            <slot name="heading"></slot>
        </h2>
        <p v-if="data === null">Loading data error</p>
        <v-container v-else-if="data !== undefined && ('id' in data)">
            <v-img :src="get_poster(image_src, image_placeholder)"></v-img>
            <h3 class="container__title" v-if="data.pseudonym">"{{ data.pseudonym }}"</h3>
            <h3 class="container__title" v-else>"{{ data.name }}"</h3>
            <slot name="paragraphs"></slot>

            <v-list shaped v-if="list">
                <v-subheader>
                    <slot name="list_heading">Tracks</slot>
                </v-subheader>
                <v-list-item-group>
                    <v-list-item v-for="(track) in list" :key="track.id" link :to="'/tracks/'+track.id">
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
        }
    },
    props: {
        data: Object,
        image_src_key: String,
        image_placeholder: String,
        list_src: Array,
        list_key: String,
        list_heading: String,
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

</style>