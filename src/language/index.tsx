import {createI18n} from 'vue-i18n'
import zhCN from './lang/zh_CN'
import zhTC from './lang/zh_TC'
import enUS from './lang/en_US'

const i18n = createI18n({
	locale: 'zh_CN', // 默认语言
	messages: {
		'zh_CN': zhCN, // 简体
		'zh_TC': zhTC, // 繁体
		'en_US': enUS, // 美式英语
	}
})

export default i18n
