<template>
  <v-app-bar app collapse-on-scroll :value="isMobile">
    <v-app-bar-nav-icon class="ml-3" elevation="2">
      <v-avatar size="48">
        <img :src="avatar" alt="avatar" style="border: 2px solid #dee2e6" />
      </v-avatar>
    </v-app-bar-nav-icon>
    <v-app-bar-title
      :style="{ color: $vuetify.theme.dark ? '#c0c0c0' : '#666666' }"
      class="text-h6"
      v-text="title"
    >
    </v-app-bar-title>
  </v-app-bar>
</template>
<script>
export default {
  name: "AppBar",
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
      title: null,
      avatar: null,
    };
  },
  mounted() {
    this.title = this.GLOBAL.title;
    this.avatar = this.GLOBAL.img.avatar;
  },
};
</script>
