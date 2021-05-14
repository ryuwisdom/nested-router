<template>
<div class="share-button">
      <a href="https://t.me/share/url?url=https://ko.xangle.io">
        <img
          src="https://static.addtoany.com/images/blog/telegram-icon.png"
        />
      </a>
</div>
</template>

<script>
export default {
name: "Telegram"
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
