<template>
  <v-app>
    <dark-button id="dark-button" :style="style.darkButton" />
    <app-bar />
    <navbar />
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import DarkButton from "./views/components/DarkButton";
import AppBar from "./views/components/AppBar";
import Navbar from "./views/components/Navbar";

export default {
  name: "App",
  components: { DarkButton, Navbar, AppBar },
  data: function () {
    return {
      style: {
        darkButton: {
          top: this.$vuetify.breakpoint.mobile ? "70px" : "20px",
          right: this.$vuetify.breakpoint.mobile ? "10px" : "20px",
        },
      },
    };
  },
  mounted() {
    this.axios.get(this.GLOBAL.dataSrc).then((response) => {
      this.title = response.data.title;
      this.avatar = response.data.img.avatar;
    });
  },
};
</script>
<style lang="scss" scoped>
#dark-button {
  position: fixed;
  z-index: 100;
}
</style>