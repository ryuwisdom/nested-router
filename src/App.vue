<template>
  <div>
    <header>
      <h1>Hello :)</h1>
    </header>
    <div class="home-container">

      <main>
        <router-link
            tag="li"
            to="/disclosure"
            exact-active-class="disclosure-active"
        >
          Disclosure
        </router-link>

        <router-link
            tag="li"
            to="/key-info"
            exact-active-class="keyInfo-active"
        >
          Key-info
        </router-link>

        <router-link
            tag="li"
            to="/blog"
            exact-active-class="blog-active"
        >
          Blog
        </router-link>

      </main>
    </div>
    <div class="child-components">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import Home from "@/views/Home";

export default {
  // components: {Home}
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
  /*height: 100vh;*/
  /*width: 100%;*/
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
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

main {
  display: flex;
}

li {
  width: 265px;
  height: 80px;
  background-color: darkgrey;
  list-style: none;
  /*margin: 10px 50px;*/
  display: flex;
  justify-content: center;
  align-content: center;
  border: 2px solid white;
}
.child-components {
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
