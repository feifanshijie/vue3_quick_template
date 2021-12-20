<template>
  {{ state.msg }}
</template>
<script>
import {defineComponent, onMounted, reactive, ref, h} from "vue";
// @ts-ignore
const StarIcon = 'assets/star_select.gif';
export default defineComponent({
  components: {

  },
  setup() {
    const modelCreateRef = ref({
      color: 0,
    })
    const state = reactive({
      msg: "test"
    });
    return {
      state
    }
  }
})
</script>
