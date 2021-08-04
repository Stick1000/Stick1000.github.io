<template>
  <a :href="url">
    <div :class="['link', url ? 'clickable' : '']">
      <div v-if="imgPath" class="link-img">
        <img :src="imgPath" :alt="title" />
      </div>
      <div class="link-content">
        <p class="link-title">{{ title }}</p>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "Link",
  props: {
    title: String,
    url: String,
    imgPath: String
  }
};
</script>

<style scoped>
.clickable {
  cursor: pointer;
}

.link {
  margin: 10px;
  padding: 10px 15px 10px 15px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 3px;
  border-radius: 6px;
  overflow: hidden;
  background-color: #eeeeee;

  display: grid;
  grid-template-columns: 30% 70%;
}

.link:hover {
  transition: all 0.4s ease;
  transform: scale(1.02);
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
}

.link-content {
  word-wrap: break-word;
  margin: 10px;
}

.link-img {
  text-align: center;
  margin-top: 5px;
  margin-right: 5%;
}

.link-img > img {
  width: 80%;
}

.link-title {
  color: #df5353;
  font: 600 1.2em "Montserrat", sans-serif;
  margin-bottom: 5px;
  margin-top: 5px;
}

.link-subtitle {
  font: 600 1em "Source Sans Pro", sans-serif;
  margin-top: 0;
  color: dimgray;
}

.link-description {
  font: 400 1em "Source Sans Pro", sans-serif;
  color: #434244;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.link a {
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 5px;
  border: 1px solid #ff5f5f;
  border-radius: 6px;

  font: 600 1em "Source Sans Pro", sans-serif;
  color: #ff5f5f;
  text-decoration-line: none;
}

.link a:hover {
  transition: all 0.4s ease;
  color: #eeeeee;
  background-color: #ff5f5f;
}
</style>
