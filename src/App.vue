<template>
  <v-app>
    <dark-button id="dark-button" :style="style.darkButton"/>
    <app-bar :style="{ 'z-index': '101' }"/>
    <navbar/>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import DarkButton from "@/components/DarkButton";
import AppBar from "@/components/AppBar";
import Navbar from "@/components/Navbar";

export default {
  name: "App",
  components: {DarkButton, Navbar, AppBar},
  computed: {
    isMobile: function () {
      return this.$vuetify.breakpoint.mobile;
    },
    isDark: function () {
      return this.$vuetify.theme.dark;
    },
  },
  data: function () {
    return {
      style: {
        darkButton: {
          top: this.$vuetify.breakpoint.mobile ? "10px" : "10px",
          right: this.$vuetify.breakpoint.mobile ? "10px" : "10px",
        },
      },
    };
  }
};
</script>
<style lang="scss" scoped>
#dark-button {
  position: fixed;
  z-index: 100;
}
</style>