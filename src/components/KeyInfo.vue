<template>
  <div class="keyInfo-container">
    <h1>Key-info</h1>
  </div>
</template>

<script>
export default {
  name: "keyInfo"
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/common.scss';
.keyInfo-container {
  @include setSize(800px, 700px);
  @include setBorder(4px, solid, $-key-info );
  @include flexRow(center, center)
}
</style>
