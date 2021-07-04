<template>
    <div>
        <h2>About Foamy</h2>
        <h3>What is Foamy?</h3>
        <p>'Foamy' is the сatalog of musical compositions. Author is Matvey Bouhartsev. Made by order of the Moscow Polytechnic University.</p>
        <h3>How many data in Foamy's catalog?</h3>
        <p>{{ agreg }}encrypted user data.</p>
        <h3>What technologies are used in Foamy?</h3>
        <ul>
            <li>Django
                <ul>
                    <li>Django Rest</li>
                    <li>Jazzmin</li>
                </ul>
            </li>
            <li>SQLite</li>
            <li>Vue
                <ul>
                    <li>VueX</li>
                    <li>Vue-Router</li>
                    <li>Vuetify</li>
                    <li>Vuetify-loader</li>
                </ul>
            </li>
            <li>Axios</li>
            <li>MDI Icons</li>
            <li>FontAwesome</li>
            <li>Fonts
                <ul>
                    <li>'Please write me a sing' ByTheButterfly</li>
                    <li>'Tchaikovsky' JoannaVu</li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "About",
    components: this,
    computed: {
        agreg(){
            let result='';
            for (let i=0; i<this.instancesList.length; i++) {
                if (this.$store.state.dataAPI[this.instancesList[i]].length>=0) result+=this.$store.state.dataAPI[this.instancesList[i]].length;
                else result+='many';
                result+=' '+this.instancesList[i]+', ';
            }
            return result;
        },
    },
};
</script>