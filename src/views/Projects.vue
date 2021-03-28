<template>
  <div>
    <img :src="bgImg" id="background-img" :style="style.backgroundImg" />
    <div
      :class="this.class.title"
      :style="{ color: $vuetify.theme.themes.light.primary }"
      v-text="title"
    ></div>
    <v-hover v-slot="{ hover }" v-for="(item, i) in info" :key="i">
      <v-card
        class="ma-9 transition-swing"
        :style="{ width: $vuetify.breakpoint.mobile ? '80%' : '60%'}"
        :class="`elevation-${hover ? 24 : 6}`"
      >
        <v-card-title class="text-h5" style="font-weight: bold">{{
          item.name
        }}</v-card-title>
        <v-divider></v-divider>
        <v-list>
          <v-list-item-group>
            <div v-for="(item, i) in item.content" :key="i">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title
                    class="text-h6 mb-2"
                    style="font-weight: bold"
                    >{{ item.title }}</v-list-item-title
                  >
                  <span
                    style="
                      text-indent: 2em;
                      line-height: 150%;
                      font-weight: bold;
                    "
                    class="text-sublime-1"
                    >{{ item.subtitle }}</span
                  >
                  <v-list disabled dense>
                    <v-list-item-group>
                      <v-list-item
                        v-for="(item, i) in item.list"
                        :key="i"
                        class="my-n3"
                      >
                        <v-list-item-content>
                          <span
                            :style="{
                              'line-height': '150%',
                              'font-weight': 'bold',
                            }"
                            class="text-body-1"
                          >
                            <span
                              :style="{
                                color: $vuetify.theme.themes.light.primary,
                              }"
                              >{{ i + 1 }}.
                            </span>
                            {{ item }}
                          </span>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
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
  name: "Projects",
  components: {},
  data: function () {
    return {
      bgImg: null,
      title: "项目经验",
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
      this.info = response.data.projects;
      this.bgImg = response.data.img.projects;
    });
  },
};
</script>

<style lang="scss" scoped>
#background-img {
  position: fixed;
}
</style>