import {defineComponent, onMounted, reactive} from 'vue';
import {useRouter} from "vue-router";
import "@styles/index.scss"
export default defineComponent({
	name: 'index',
	setup(props) {
		const router = useRouter()
		const state = reactive({
			currentIndex: 0,
		});

		const init = () => {
		}
		onMounted(() => init())
		return () => (
			<>
				home
			</>
		)
	},
});
