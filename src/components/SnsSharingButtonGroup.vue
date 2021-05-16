<template>
  <div class="sns-share-btn-group">
    <kakao-button></kakao-button>
    <telegram-button></telegram-button>
    <twitter-button></twitter-button>
  </div>
</template>

<script>
import KakaoButton from "@/components/socialSharingButton/KakaoButton";
import TelegramButton from "@/components/socialSharingButton/TelegramButton";
import TwitterButton from "@/components/socialSharingButton/TwitterButton";
export default {
name: "SnsSharingButtonGroup",
  components: {TwitterButton, TelegramButton, KakaoButton},
}
</script>

<style lnag="scss" scoped>
.sns-share-btn-group {
  display: flex;
}
</style>
