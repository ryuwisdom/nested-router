<template>
  <div>
    <input type="text"  v-model="url" id="urlInput" class="url-input"/>
    <button @click="click" class="url-copy-btn">복사하기</button>
  </div>
</template>

<script>
import {copyToClipboard} from "@/components/copy.js"

export default {
  name: "Copy",
  data() {
    return {
      url: window.document.location.href
    }
  },
  methods: {
    click() {
      console.log('+_+')
      copyToClipboard()
    }
  }
}
</script>

<style scoped>

</style>