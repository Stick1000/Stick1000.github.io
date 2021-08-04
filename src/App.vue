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
import Header from "./components/Header";
import Modal from "./components/Modal";
import Details from "./components/Details";
import About from "./components/About";

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
