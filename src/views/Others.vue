<template>
  <div>
    <img :src="bgImg" id="background-img" :style="style.backgroundImg" />
    <div
      :class="this.class.title"
      :style="{ color: $vuetify.theme.themes.light.primary }"
      v-text="title"
    />
    <v-hover v-slot="{ hover }">
      <v-card
        class="ma-9 transition-swing"
        :style="{ width: $vuetify.breakpoint.mobile ? '80%' : '60%' }"
        :class="`elevation-${hover ? 24 : 6}`"
      >
        <v-list>
          <v-list-item-group>
            <div v-for="(item, i) in info" :key="i">
              <v-list-item>
                <v-list-item-content>
                  <span style="font-weight: bold; line-height: 150%">
                    <span
                      :style="{ color: $vuetify.theme.themes.light.primary }"
                      v-html="i + 1 + '. '"
                    />
                    <span v-html="item" />
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
  data: function () {
    return {
      bgImg: null,
      title: "自我评价",
      info: null,
      style: {
        backgroundImg: {
          width: this.$vuetify.breakpoint.mobile ? "60vw" : "20vw",
          bottom: this.$vuetify.breakpoint.mobile ? "20vw" : "3vw",
          right: this.$vuetify.breakpoint.mobile ? "3vw" : "3vw",
        },
      },
      class: {
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
    this.axios.get(this.GLOBAL.dataSrc).then((response) => {
      this.info = response.data.others;
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