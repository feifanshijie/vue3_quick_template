import {defineComponent} from "vue";
import "@styles/common/footer.scss"

export default defineComponent({
	name: '500',
	setup(props) {
		return () => (
			<>
				500 server error
			</>
		)
	},
});
