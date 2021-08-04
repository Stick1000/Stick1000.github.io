<template>
  <div id="details">
    <Section title="Education" :columns="2" :content="education" />
    <Section title="Skills" :columns="4" :content="skills" />
    <Section title="Technologies" :columns="3" :content="technologies" />
    <Section title="Projects" :columns="2" :content="projects" />
  </div>
</template>

<script>
import Section from "./Section";
import Data from "../db";

export default {
  name: "Details",
  components: {
    Section
  },
  data() {
    return {
      education: Data.education,
      skills: Data.skills,
      technologies: Data.technologies,
      projects: Data.projects
    };
  }
};
</script>

<style>
#details {
  padding: 2.5% 10% 0% 10%;
}

@media screen and (max-width: 800px) {
  #details {
    padding: 1% 1.5% 0% 1.5%;
  }
}
</style>
