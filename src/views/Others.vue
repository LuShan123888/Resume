<template>
  <div>
    <img :src="bgImg" id="background-img" :style="style.backgroundImg" />
  </div>
</template>
<script>
export default {
  name: "Others",
  components: {},
  data: function () {
    return {
      style: {
        bgImg: null,
        backgroundImg: {
          width: this.$vuetify.breakpoint.mobile ? "60vw" : "30vw",
          bottom: this.$vuetify.breakpoint.mobile ? "20vw" : "3vw",
          right: this.$vuetify.breakpoint.mobile ? "3vw" : "3vw",
        },
      },
    };
  },
  methods: {},
  mounted() {
    this.axios.get(this.GLOBAL.dataSrc).then((response) => {
      this.bgImg = response.data.img.others;
    });
  },
};
</script>

<style lang="scss" scoped>
#background-img {
  position: fixed;
}
</style>