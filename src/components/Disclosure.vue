<template>
  <div class="disclosure-container">
    <h1>Disclosure</h1>
  </div>
</template>

<script>
export default {
  name: "disclosure"
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/common.scss';
.disclosure-container {
  @include setSize(800px, 700px);
  @include setBorder(4px, solid, $-disclosure );
  @include flexRow(center, center)
}
</style>
