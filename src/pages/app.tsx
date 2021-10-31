import {defineComponent, reactive} from 'vue';
import {useStore} from "vuex";
import HeaderComponent from '@components/common/header'
import FooterComponent from '@components/common/footer'
import MainComponent from '@components/common/main'

export default defineComponent({
	name: 'App',
	setup(props) {
		const store = useStore()
		const state = reactive({
			theme: null
		})
		return () => (
			<>
				<HeaderComponent/>
				<MainComponent/>
				<FooterComponent/>
			</>
		);
	}
});
