<template>
<div class="share-button">
      <a id="create-kakao-link-btn" href="javascript:;">
        <img
          src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
        />
      </a>
</div>
</template>

<script>
/* eslint-disable no-undef */
export default {
name: "Kakao",
  mounted() {
    Kakao.Link.createDefaultButton({
      container: "#create-kakao-link-btn",
      objectType: "feed",
      content: {
        title: "Xangle",
        description: "가상자산 산업에 공시 제도 도입 및 활성화",
        imageUrl:
          "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2b9570d6-b839-4341-b952-0ca75bef57c8%2FArtboard_Copy.jpg?table=block&id=8abdcdff-6bc9-495c-9901-0d34a3497280&width=2560&userId=aaa9188f-7ace-489a-a31b-3a3776af3a38&cache=v2",
        link: {
          mobileWebUrl: "https://ko.xangle.io/",
          webUrl: "https://ko.xangle.io/"
        }
      },
      social: {
        likeCount: 286,
        commentCount: 45,
        sharedCount: 845
      },
      buttons: [
        {
          title: "웹으로 보기",
          link: {
            mobileWebUrl: "https://ko.xangle.io/",
            webUrl: "https://ko.xangle.io/"
          }
        },
        {
          title: "앱으로 보기",
          link: {
            mobileWebUrl: "https://ko.xangle.io/",
            webUrl: "https://ko.xangle.io/"
          }
        }
      ]
    });
  }
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
