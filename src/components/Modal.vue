<script>
export default {
  name: "Modal",
  data() {
    return {
      title: "",
      subtitle: "",
      description: "",
      showModal: false
    };
  },
  mounted: function() {
    this.emitter.on("modal-open", e => {
      this.populateModal(e);
    });
  },
  methods: {
    populateModal(e) {
      this.title = e.title;
      this.subtitle = e.subtitle;
      this.description = e.description;
      this.showModal = true;
    }
  }
};
</script>

<template>
  <div id="modal" @click.self="showModal = false" v-show="showModal">
    <div class="modal-box">
      <div class="modal-header">
        <h1 class="modal-title">{{ title }}</h1>
        <span class="modal-close clickable" @click="showModal = false"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
            /></svg
        ></span>
      </div>
      <div class="modal-content">
        <p class="modal-subtitle">{{ subtitle }}</p>
        <p class="modal-description">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.clickable {
  cursor: pointer;
}

@keyframes blur {
  100% {
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
  }
}

#modal {
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  animation: blur 0.5s ease 0s 1 normal forwards;

  overflow: auto;
}

.modal-box {
  margin: 15% auto;
  width: 50%;
  padding: 10px 15px 10px 15px;
  background-color: #eeeeee;

  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  border-radius: 6px;
}

.modal-header {
  width: 100%;
  display: inline-flex;
}

.modal-close {
  width: 15px;
  height: 15px;
}

.modal-title {
  margin-right: auto;
}

.modal-description {
  white-space: pre-line;
}

.modal-title {
  color: #df5353;
  font: 600 1.2em "Montserrat", sans-serif;
  margin-bottom: 5px;
  margin-top: 5px;
}

.modal-subtitle {
  font: 600 1em "Source Sans Pro", sans-serif;
  margin-top: 0;
  color: dimgray;
}

.modal-description {
  font: 400 1em "Source Sans Pro", sans-serif;
  color: #434244;
}

.modal-close {
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 5px;
  border: 1px solid #ff5f5f;
  border-radius: 6px;

  font: 600 1em "Source Sans Pro", sans-serif;
  color: #ff5f5f;
  text-decoration-line: none;
}

.modal-close:hover {
  transition: all 0.4s ease;
  color: #eeeeee;
  background-color: #ff5f5f;
}
</style>
