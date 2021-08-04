<template>
  <div id="app">
    <Header
      v-on="{
        showabout: _showAbout,
        showdetails: _showDetails
      }"
    />
    <Modal />
    <Details v-show="showDetails" />
    <About v-show="showAbout" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Modal from "./components/Modal.vue";
import Details from "./components/Details.vue";
import About from "./components/About.vue";

export default {
  name: "app",
  data() {
    return {
      showDetails: true,
      showAbout: false
    };
  },
  components: {
    Header,
    Modal,
    Details,
    About
  },
  methods: {
    _showAbout() {
      this.showAbout = true;
      this.showDetails = false;
    },
    _showDetails() {
      this.showDetails = true;
      this.showAbout = false;
    }
  }
};
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}

body {
  background-color: #e6e6e6;
  margin: 0;
}
</style>
