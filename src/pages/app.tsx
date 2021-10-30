import {defineComponent, reactive} from 'vue';
import {useStore} from "vuex";
import {RouterView} from "vue-router";

export default defineComponent({
	name: 'App',
	setup(props) {
		const store = useStore()
		const state = reactive({
			theme: null
		})

		return () => (
			<>
				<RouterView/>
			</>
		);
	}
});
