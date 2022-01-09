<template>
  <div>
    <img :src="bgImg" id="background-img" :style="style.backgroundImg" />
    <div
      :class="classes.title"
      :style="{ color: $vuetify.theme.themes.light.primary }"
      v-text="title"
    ></div>
    <v-hover v-slot="{ hover }">
      <v-card
        class="ma-9 transition-swing"
        :style="{ width: isMobile ? '80%' : '60%' }"
        :class="`elevation-${hover ? 24 : 6}`"
      >
        <v-list>
          <v-list-item-group>
            <div v-for="(item, i) in info" :key="i">
              <v-list-item>
                <v-list-item-content>
                  <span
                    :style="{ 'font-weight': 'bold', 'line-height': '150%' }"
                  >
                    <span v-html="item.title + '：'"></span>
                    <span v-html="item.value"></span>
                  </span>
                </v-list-item-content>
              </v-list-item>
              <v-divider v-if="i != info.length - 1"></v-divider>
            </div>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
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
      bgImg: null,
      title: "个人信息",
      info: null,
      style: {
        backgroundImg: {
          width: this.$vuetify.breakpoint.mobile ? "60vw" : "20vw",
          bottom: this.$vuetify.breakpoint.mobile ? "20vw" : "3vw",
          right: this.$vuetify.breakpoint.mobile ? "3vw" : "3vw",
        },
      },
      classes: {
        title: {
          "text-h2": !this.$vuetify.breakpoint.mobile,
          "text-h3": this.$vuetify.breakpoint.mobile,
          "ml-3": this.$vuetify.breakpoint.mobile,
          "ml-9": !this.$vuetify.breakpoint.mobile,
          "mt-3": this.$vuetify.breakpoint.mobile,
          "mt-9": !this.$vuetify.breakpoint.mobile,
        },
      },
    };
  },
  methods: {},
  mounted() {
    this.info = this.GLOBAL.info;
    this.bgImg = this.GLOBAL.img.info;
  },
};
</script>

<style lang="scss" scoped>
#background-img {
  position: fixed;
}
</style>