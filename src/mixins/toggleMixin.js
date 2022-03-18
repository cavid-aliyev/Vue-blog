export default {
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
  mounted() {
    console.log("mixin mounted");
  },
  // ...
};
