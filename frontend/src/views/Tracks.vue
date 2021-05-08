<template>
  <div>
    <h1>Tracks</h1>
    <p v-if="tracks === null">There are no tracks.</p>
    <ul>
      <li v-for="track in tracks" :key="track.name">
        {{track.name}}
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  name: "Tracks",
  components: this,
  computed: {
    tracks() {
      return this.$store.state.dataAPI;
    }
  },
  mounted() {
      this.$getDataAPI('tracks');
  },
};
</script>