<template>
  <div class="pmodal" v-if="show" @click="hideModal">
    <div @click.stop class="pmodal__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostModal",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    hideModal() {
      this.$emit("update:show", false);
    },
  },
};
</script>

<style scoped>
.pmodal {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.pmodal__content {
  margin: auto;
  background: #ffffff;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
  padding: 20px;
}
</style>
