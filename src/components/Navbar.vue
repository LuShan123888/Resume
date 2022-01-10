<template>
  <div>
    <v-navigation-drawer app width="320" touchless>
      <div class="d-flex align-center mx-auto" style="height: 100%; width: 80%">
        <div class="justify-center" style="width: 100%">
          <div class="justify-center d-flex mb-2">
            <v-hover v-slot="{ hover }">
              <v-avatar
                  size="200"
                  :class="`elevation-${hover ? 24 : 6}`"
                  class="transition-swing"
              >
                <img
                    :src="avatar"
                    alt="avatar"
                    style="border: 2px solid #dee2e6"
                />
              </v-avatar>
            </v-hover>
          </div>
          <v-list rounded>
            <v-subheader
                class="justify-center mb-3 text-h6"
                v-text="title"
            ></v-subheader>
            <v-list-item-group v-model="selectedItem" color="primary">
              <v-list-item
                  v-for="(item, i) in menus"
                  :key="i"
                  :to="item.path"
                  class="d-flex justify-center"
              >
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title
                      v-text="item.text"
                      class="text-subtitle-2"
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </div>
      </div>
    </v-navigation-drawer>
    <v-bottom-navigation color="primary" fixed app grow v-show="isMobile">
      <v-btn
          v-for="(item, i) in menus"
          :key="i"
          :to="item.path"
          min-width="70px"
      >
        <span v-text="item.text"></span>
        <v-icon v-text="item.icon"></v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  name: "Navbar",
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
      selectedItem: 1,
      title: null,
      avatar: null,
      menus: [
        {text: "个人信息", path: "/", icon: "mdi-home-account"},
        {text: "教育经历", path: "education", icon: "mdi-book"},
        {text: "专业技能", path: "skills", icon: "mdi-lightbulb-on-outline"},
        {text: "项目经验", path: "projects", icon: "mdi-flag"},
        {text: "自我评价", path: "others", icon: "mdi-message-processing"},
      ],
    };
  },
  mounted() {
    this.title = this.GLOBAL.title;
    this.avatar = this.GLOBAL.img.avatar;
  },
};
</script>