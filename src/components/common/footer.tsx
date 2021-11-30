import {defineComponent} from "vue";
import "@styles/common/footer.scss"

export default defineComponent({
	name: 'footer_component',
	setup(props) {
		return () => (
			<>
				<div class="layout-page-footer">
					<div class="layout-page-footer-content">
						footer
					</div>
				</div>
			</>
		)
	},
});
