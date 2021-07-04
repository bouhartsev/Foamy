<template>
    <div>
        <h2>Home</h2>
        <Cards v-for="(item, key, index) in requestedData" :data="item" :url="key" :minimal="index>=3" :image_placeholder="key.slice(0, -1)+'.png'" :image_src_key="(index==0)?'releaseData':''" class="">
            <template #additional><h3 class="text-center mt-5">Last {{ key }}</h3></template>
        </Cards>
    </div>
</template>

<script>
import Cards from "@/components/Cards";

export default {
    name: "Home",
    components: {
        Cards,
    },
    computed: {
        requestedData() {
            let data = {};
            this.instancesList.forEach(path => {
                data[path] = this.filterData(this.$store.state.dataAPI[path]);
            });
            return data;
        },
    },
    methods: {
        filterData: function(data=[]){
            let last = (this.$vuetify.breakpoint.mdAndUp)?3:2;
            if (data.length) return [].concat(data).reverse().slice(0, last);
            else if (JSON.stringify(data) != JSON.stringify([])) return {};
            else return [];
        }
    }
};
</script>