<template>
    <div>
        <Instance v-for="(item, key, index) in searchData" :data="{'id': index, 'name': key}" :list_src="item" minimal>
            <template #heading v-if="index==0">Searching for <i>"{{ request }}"</i></template>
        </Instance>
    </div>
</template>

<script>
import Instance from "../components/Instance";

export default {
    name: "Search",
    components: {
        Instance,
    },
    computed: {
        searchData() {
            let data = {};
            this.instancesList.forEach(path => {
                data[path] = this.filterData(this.$store.state.dataAPI[path]);
            });
            return data;
        },
        request() {
            return this.$route.query['query'];
        },
    },
    methods: {
        filterData: function(data=[]){
            if (data.length)
                return data.filter(x => x.name.toLowerCase().indexOf(this.request.toLowerCase()) !== -1);
            else if (JSON.stringify(data) != JSON.stringify([])) return {};
            else return [];
        }
    }
}
</script>