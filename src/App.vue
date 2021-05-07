<template>
  <div class="main-container">
    <header>
      <h1>Hello :)</h1>
    </header>
    <div class="home-container">
      <main>
        <router-link
            v-for="category in categories"
            tag="li"
            :to="{name:category.path}"
            :exact-active-class="`${category.path}-active`"
            :key="category.path"
        >
          <p>{{ category.path }}</p>
        </router-link>
      </main>
    </div>
    <div class="child-components">
      <router-view></router-view>
    </div>
    <div>
      <sms-sharing-button-group></sms-sharing-button-group>
    </div>
  </div>
</template>

<script>

import SmsSharingButtonGroup from "@/components/SmsSharingButtonGroup";
export default {
  components: {SmsSharingButtonGroup},
  data() {
    return {
      categories: [
        {path: 'disclosure'},
        {path: 'keyInfo'},
        {path: 'blog'},
      ]
    }
  },
}
</script>


<style lang="scss" scoped>
@import '~@/assets/scss/common.scss';

.main-container {
  font-family: 'Ubuntu',sans-serif ;
  header {
    @include setSize(100%, 100px);
    @include flexRow(center, center);
    position: fixed;
    top: 40px;
  }

  .home-container {
    @include flexCol(center, center);
    margin-top: 100px;

    main {
      display: flex;

      li {
        @include setSize(265px, 80px);
        margin-top: 40px;
        background-color: silver;
        @include flexRow(center, center);
        border: 2px solid $white;
        cursor: pointer;
      }


      li > p {
        @include flexRow(center, center);
        cursor: pointer;
        font-size: 20px;
      }

      .disclosure-active,
      .keyInfo-active,
      .blog-active {
        font-weight: bold;
      }


    }

  }

  .child-components {
    @include flexRow(center, center)
  }

}


</style>
