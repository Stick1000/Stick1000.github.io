<template>
  <div class="section">
    <h2 class="section-heading">{{ title }}</h2>
    <div class="section-content">
      <div
        v-if="Array.isArray(content) && contentType === 'cards'"
        :class="columns ? `col-${columns}` : ''"
      >
        <Card
          v-for="(item, index) of content"
          :key="`${title}-${index}`"
          :layout="item.layout"
          :includeModal="item.includeModal"
          :imgPath="item.imgPath"
          :title="item.title"
          :subtitle="item.subtitle"
          :description="item.description"
          :showDescription="item.showDescription"
          :url="item.url"
          :urlText="item.urlText"
        />
      </div>
      <div
        v-else-if="Array.isArray(content) && contentType === 'links'"
        :class="columns ? `col-${columns}` : ''"
      >
        <Link
          v-for="(item, index) of content"
          :key="`${title}-${index}`"
          :imgPath="item.imgPath"
          :title="item.title"
          :url="item.url"
        />
      </div>

      <p v-else-if="typeof content === 'string'">
        {{ content }}
      </p>
      <p v-if="!content || !content.length" class="nodata">No data.</p>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
import Link from "./Link.vue";

export default {
  name: "Section",
  components: {
    Card,
    Link
  },
  props: {
    title: String,
    columns: Number,
    content: [Array, String],
    contentType: {
      type: String,
      default: "cards"
    }
  }
};
</script>

<style scoped>
.nodata {
  font: 600 1em "Montserrat", sans-serif;
}

.col-6 {
  display: grid;
  grid-template-columns: 16.66% 16.66% 16.66% 16.66% 16.66% 16.66%;
}

.col-4 {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
}

.col-3 {
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
}

.col-2 {
  display: grid;
  grid-template-columns: 50% 50%;
}

.section {
  margin: 0 2.5% 2.5% 2.5%;
  padding: 15px;
  display: grid;
  grid-template-columns: 25% 75%;
}

.section-heading {
  padding: 10px 0px 10px 0px;
  background-color: #e6e6e6;
  position: sticky;
  position: -webkit-sticky;
  z-index: 1;
  top: 0;
  color: #df5353;
  font: 700 1.5em "Montserrat", sans-serif;
  margin-top: 0;
}

.section-content {
  width: 100%;
}

@media screen and (max-width: 900px) {
  .section {
    grid-template-columns: 100%;
  }

  .col-6 {
    grid-template-columns: 25% 25% 25% 25%;
  }

  .col-4 {
    grid-template-columns: 33.33% 33.33% 33.33%;
  }

  .col-3 {
    grid-template-columns: 50% 50%;
  }
}

@media screen and (max-width: 800px) {
  .col-6,
  .col-4 {
    grid-template-columns: 50% 50%;
  }

  .col-3,
  .col-2 {
    grid-template-columns: 100%;
  }
}
</style>
