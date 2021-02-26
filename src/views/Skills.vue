<template>
  <div class="v-row">
    <img
      src="../assets/img/coding.svg"
      id="background-img"
      :style="style.backgroundImg"
    />
    <dark-button id="dark-button" :style="style.darkButton"></dark-button>
  </div>
</template>
<script>
import DarkButton from "../components/dark-button.vue";
export default {
  name: "Skills",
  components: { DarkButton },
  data: function () {
    return {
      style: {
        darkButton: {
          top: this.$vuetify.breakpoint.mobile?"70px":"20px",
          right: this.$vuetify.breakpoint.mobile?"10px":"20px",
        },
        backgroundImg: {
          width: this.$vuetify.breakpoint.mobile?"60vw":"30vw",
          bottom: this.$vuetify.breakpoint.mobile?"20vw":"3vw",
          right: this.$vuetify.breakpoint.mobile?"3vw":"3vw",
        },
      },
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
#background-img {
  position: fixed;
}
#dark-button {
  position: fixed;
  z-index: 100;
}
</style>