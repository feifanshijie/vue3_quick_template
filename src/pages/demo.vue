<template>

</template>
<script setup>
import {onMounted} from "vue";
import {SignIn} from "@apis";
const init = async () => {
  const result = await SignIn({})
  console.log('重新初始化')
}
onMounted(() => init())
</script>

<style scoped>

</style>
