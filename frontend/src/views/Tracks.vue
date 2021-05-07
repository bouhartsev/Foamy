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
import axios from "axios";

export default {
  name: "Tracks",
  components: this,
  data() {
    return {
      tracks: null,
    };
  },
  mounted() {
    this.getTracks();
  },
  methods: {
    getTracks() {
      axios
        .get("//127.0.0.1:8000/api/track/?format=json")
        .then((response) => (this.tracks = response.data));
    },
  },
};
</script>
