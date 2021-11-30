import {defineComponent} from "vue";
import "@styles/common/main.scss"
import {RouterView} from "vue-router";

export default defineComponent({
	name: 'main_component',
	setup(props) {
		return () => (
			<>
				<div class="layout-page-main">
					<div class="layout-page-main-content">
						<RouterView/>
					</div>
				</div>
			</>
		)
	},
});
