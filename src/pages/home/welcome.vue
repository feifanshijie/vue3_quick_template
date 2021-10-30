<template>
  {{ state.msg }}
</template>
<script>
import {defineComponent, onMounted, reactive, ref, h} from "vue";
import {
  NBreadcrumb,
  NBreadcrumbItem,
  NIcon,
  NButton,
  NForm,
  NFormItem,
  NInput,
  NInputNumber,
  NDataTable,
  NSpin,
  NPopconfirm,
  NModal,
  NSpace,
  useDialog,
  NSelect,
  useMessage,
  NCheckbox, NTag,
  NInputGroup
} from "naive-ui";
import {WebsiteList, WebsiteCreate, WebsiteDelete, WebsiteBatchDelete} from "@apis/website";
import {HomeOutline, StarOutline, StarSharp} from '@vicons/ionicons5'
import {ColorConfig, IconConfig, IconImageConfig} from "../../configs/business";
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
