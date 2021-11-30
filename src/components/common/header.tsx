import {defineComponent} from "vue";
import "@styles/common/header.scss"

export default defineComponent({
	name: 'header_component',
	setup(props) {
		return () => (
			<>
				<div class="layout-page-header">
					<div class="layout-page-header-content">
						header
					</div>
				</div>
			</>
		)
	},
});
