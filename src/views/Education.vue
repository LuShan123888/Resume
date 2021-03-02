<template>
  <div>
    <img :src="bgImg" id="background-img" :style="style.backgroundImg" />
    <div :class="this.class.title" :style="{ color: $vuetify.theme.themes.light.primary }" v-text="title"></div>
    <v-hover v-slot="{ hover }">
      <v-card class="ma-9 transition-swing" :style="{ width: $vuetify.breakpoint.mobile ? '80%' : '50%' }"
        :class="`elevation-${hover ? 24 : 6}`">
        <v-list>
          <v-list-item-group>
            <div v-for="(item, i) in info" :key="i">
              <v-list-item>
                <v-list-item-content>
                  <span :style="{'font-weight': 'bold','line-height': '150%'}">{{ item.title }} : <span
                      v-html="item.value"></span></span>
                </v-list-item-content>
              </v-list-item>
              <v-divider v-if="i != info.length - 1"></v-divider>
            </div>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-hover>
    <dark-button id="dark-button" :style="style.darkButton"></dark-button>
  </div>
</template>

<script>
  import DarkButton from "../components/dark-button.vue";
  import bgImg from "../assets/img/Graduation.svg";
  export default {
    name: "Education",
    components: { DarkButton },
    data: function () {
      return {
        bgImg: bgImg,
        title: "教育经历",
        info: null,
        style: {
          darkButton: {
            top: this.$vuetify.breakpoint.mobile ? "70px" : "20px",
            right: this.$vuetify.breakpoint.mobile ? "10px" : "20px",
          },
          backgroundImg: {
            width: this.$vuetify.breakpoint.mobile ? "60vw" : "30vw",
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
      this.axios
        .get("/test.json")
        .then((response) => (this.info = response.data.education));
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