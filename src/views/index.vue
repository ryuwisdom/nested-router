<template>
<!--이 컴포넌트도 재사용 가능해야-->
  <div class="home-container">
    <header>
    <h1>Hello :)</h1>
    </header>
    <main>

    <blog-tab></blog-tab>

    </main>
  </div>
</template>

<script>
import Blog from '@/components/Blog.vue';
// @ is an alias to /src

export default {
  name: 'Home',
  components: {'blog-tab': Blog}
}
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}

html, body {
  height: 100%;
}


.home-container {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: whitesmoke;
}
header {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 40px;
}

h1 {
  /*margin-top: 20px;*/
}

</style>
