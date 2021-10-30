import {defineComponent} from "vue";
import "@styles/error.scss"

export default defineComponent({
	name: '404',
	setup(props) {
		return () => (
			<>
				<div class="flex-center-center">
					404 资源不存在
				</div>
			</>
		)
	},
});
