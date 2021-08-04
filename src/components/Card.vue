<template>
  <div
    @click="launchModal"
    :class="['card', layout, includeModal ? 'clickable' : '']"
  >
    <div v-if="imgPath" :class="`${layout}-img`">
      <img :src="imgPath" :alt="title" />
    </div>
    <div :class="`${layout}-content`">
      <p :class="`${layout}-title`">{{ title }}</p>
      <p :class="`${layout}-subtitle`">{{ subtitle }}</p>
      <p v-if="showDescription" :class="`${layout}-description`">
        {{ description }}
      </p>
      <a v-if="url && urlText" :href="url">{{ urlText }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    layout: String,
    includeModal: {
      type: Boolean,
      default: false
    },
    imgPath: String,
    title: String,
    subtitle: String,
    description: String,
    showDescription: {
      type: Boolean,
      default: false
    },
    url: String,
    urlText: String
  },
  methods: {
    launchModal(e) {
      if (this.includeModal && e.target.tagName !== "A") {
        this.$root.$emit("modal-open", {
          title: this.title,
          subtitle: this.subtitle,
          description: this.description
        });
      }
    }
  }
};
</script>

<style scoped>
.clickable {
  cursor: pointer;
}

.card {
  margin: 10px;
  padding: 10px 15px 10px 15px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 3px;
  border-radius: 6px;
  overflow: hidden;
  background-color: #eeeeee;
}

.card:hover {
  transition: all 0.4s ease;
  transform: scale(1.02);
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
}

.card-h {
  display: grid;
  grid-template-columns: 30% 70%;
}

.card-v-content {
  margin: 10px;
}

.card-sm-content {
  word-wrap: break-word;
}

.card-h-img,
.card-v-img,
.card-sm-img {
  text-align: center;
}

.card-h-img {
  margin-top: 5px;
  margin-right: 5%;
}

.card-v-img {
  margin: -10px -15px 0px -15px;
  background-color: #ff5f5f;
}

.card-h-img > img,
.card-sm-img > img {
  width: 80%;
}

.card-v-img > img {
  width: 100%;
}

.card-h-title,
.card-v-title,
.card-sm-title {
  color: #df5353;
  font: 600 1.2em "Montserrat", sans-serif;
  margin-bottom: 5px;
  margin-top: 5px;
}

.card-sm-title {
  font: 600 1em "Montserrat", sans-serif;
}

.card-h-subtitle,
.card-v-subtitle {
  font: 600 1em "Source Sans Pro", sans-serif;
  margin-top: 0;
  color: dimgray;
}

.card-h-description,
.card-v-description {
  font: 400 1em "Source Sans Pro", sans-serif;
  color: #434244;
}

.card-h-description,
.card-v-description {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.card a {
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 5px;
  border: 1px solid #ff5f5f;
  border-radius: 6px;

  font: 600 1em "Source Sans Pro", sans-serif;
  color: #ff5f5f;
  text-decoration-line: none;
}

.card a:hover {
  transition: all 0.4s ease;
  color: #eeeeee;
  background-color: #ff5f5f;
}
</style>
