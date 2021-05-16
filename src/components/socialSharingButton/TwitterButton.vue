<template>
<div class="share-button">
  <a class="twitter-share-button"
     href="https://twitter.com/intent/tweet?text=Hello%20world">
    <img
        src="https://openvisualfx.com/wp-content/uploads/2019/10/pnglot.com-twitter-bird-logo-png-139932.png"
    />
  </a>

</div>
</template>

<script>
export default {
name: "Twitter"
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/common.scss';
.share-button {
  cursor: pointer;

  @include setSize(50px, 50px);
  a{
    img{
      border-radius: 50%;
      @include setSize(50px, 50px);
    }
  }
}
</style>
