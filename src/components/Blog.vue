<template>
<div class="blog-container">
  <h1>Blog</h1>
</div>
</template>

<script>
export default {
name: "Blog"
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/common.scss';
.blog-container {
  @include setSize(800px, 700px);
  @include setBorder(4px, solid, $-blog );
  @include flexRow(center, center)
}
</style>
