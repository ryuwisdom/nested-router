<template>
  <div class="sms-share-btn-group">
    <kakao-button></kakao-button>
    <telegram-button></telegram-button>
    <twitter-button></twitter-button>
  </div>
</template>

<script>
import KakaoButton from "@/components/socialShanringButton/KakaoButton";
import TelegramButton from "@/components/socialShanringButton/TelegramButton";
import TwitterButton from "@/components/socialShanringButton/TwitterButton";
export default {
name: "SmsSharingButtonGroup",
  components: {TwitterButton, TelegramButton, KakaoButton}
}
</script>

<style scoped>

</style>
