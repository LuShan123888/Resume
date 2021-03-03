<template>
  <div>
    <img :src="bgImg" id="background-img" :style="style.backgroundImg" />
    <dark-button id="dark-button" :style="style.darkButton"></dark-button>
  </div>
</template>
<script>
import DarkButton from "../components/dark-button.vue";
export default {
  name: "Others",
  components: { DarkButton },
  data: function () {
    return {
      style: {
        bgImg:null,
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
  mounted() {
    this.axios
        .get(this.GLOBAL.dataSrc)
        .then((response) => {
          this.bgImg = response.data.img.others;
        });
  },
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