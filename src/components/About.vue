<script>
import Section from "./Section.vue";
import Data from "../db";

export default {
  name: "About",
  components: {
    Section
  },
  data() {
    return {
      bio: Data.about.bio,
      links: Data.about.links
    };
  }
};
</script>

<template>
  <div id="about">
    <Section title="About me" :content="bio" />
    <Section
      title="Contact me"
      :columns="3"
      :content="links"
      contentType="links"
    />
  </div>
</template>

<style>
#about {
  padding: 2.5% 10% 0% 10%;
}

@media screen and (max-width: 800px) {
  #about {
    padding: 1% 1.5% 0% 1.5%;
  }
}

#about p {
  font: 400 1em "Source Sans Pro", sans-serif;
  color: #434244;
  text-align: justify;
}

#about a {
  color: #434244;
  text-decoration-line: none;
}
</style>
