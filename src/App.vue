<template>
  <div id="app" v-if="connected">
    <peer-header />
    <router-view></router-view>
  </div>
</template>

<script>
import PeerHeader from "./components/Header.vue"

export default {
  name: "app",
  components: {
    'peer-header': PeerHeader
  },
  data() {
    return {
      connected: false
    }
  },
  mounted: function() {
    this.startPubsub();
  },
  methods: {
    async startPubsub() {
      await this.$startLibp2p();
      this.connected = true
    }
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

#app {
  align-items: center;
  justify-content: center;
  height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

button {
  margin: 4px;
  padding: 8px;
  border-radius: 20px;
  border: #84fab0 2px solid;
  font-size: 14px;
  font-family: inherit;
  background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
}

textarea {
	padding: 3px;
  border: #84fab0 3px solid;
  border-radius: 8px;
  font-family: inherit;
}

input {
	padding: 3px;
  border: #84fab0 3px solid;
  border-radius: 8px;
  font-family: inherit;
}

</style>
