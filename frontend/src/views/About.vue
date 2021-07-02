<template>
    <div>
        <h2>About Foamy</h2>
        <h3>What is Foamy?</h3>
        <p>'Foamy' is the сatalog of musical compositions. Author is Matvey Bouhartsev. Made by order of the Moscow Polytechnic University.</p>
        <h3>How many data in Foamy's catalog?</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquid, commodi dignissimos eos id, ipsa, iste labore maiores minima molestias officiis perferendis quae ratione repudiandae soluta sunt velit? Excepturi!</p>
        <h3>What technologies are used in Foamy?</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, commodi doloremque eos excepturi explicabo laboriosam minima nemo neque nihil obcaecati optio perferendis perspiciatis quidem soluta vel? Architecto corporis nesciunt reiciendis!</p>
    </div>
</template>

<script>
export default {
    name: "About",
    components: this,
    computed: {
        agreg(){
            let result='';
            for (let i in this.instancesList) {
                if (this.$store.state.dataAPI[i]) result+=this.$store.state.dataAPI[i].length+' '+i+', ';
            }
            return result;
        },
    },
};
</script>