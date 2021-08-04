<template>
  <header id="header">
    <div class="header-img">
      <img src="../assets/profile.png" alt="profile_pic" />
    </div>
    <div class="header-content">
      <h1>Janley Molina</h1>
      <p>Software Developer Intern at ItemHound Corporation</p>
      <a @click="showDetails" id="details-btn" href="#details">View details</a>
      <a @click="showAbout" id="about-btn" href="#about">More</a>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    showAbout() {
      this.$emit("showabout");
    },
    showDetails() {
      this.$emit("showdetails");
    }
  }
};
</script>

<style scoped>
#header {
  background-image: linear-gradient(
      rgba(170, 130, 0, 0.05),
      rgba(0, 0, 0, 0.95)
    ),
    url("../assets/bg.png");
  background-size: cover;

  text-align: center;
  padding: 10%;
}

.header-img {
  text-align: center;
}

.header-img > img {
  max-width: 250px;
  border-radius: 50%;
}

.header-content {
  color: #eeeeee;
  font-family: "Montserrat", sans-serif;
}

.header-content > h1 {
  font-size: 2em;
  font-weight: 600;
}

.header-content > p {
  font: 400 1.2em "Source Sans Pro", sans-serif;
}

.header-content a {
  margin: 5px;
  padding: 10px;
  border-radius: 6px;
  border: 2px solid #ff5f5f;

  font-size: 1em;
  font-weight: 500;
  color: #ff5f5f;

  text-decoration-line: none;
}

.header-content a:hover {
  transition: all 0.4s ease;
  color: #eeeeee;
  background-color: #ff5f5f;
}
</style>
