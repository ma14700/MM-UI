
import MAlert from './alert/index'
import MRow from './row/index'


const components = [
  MRow,
  MAlert,
]

const install = function(Vue) {
  if (install.installed) return
  console.log(components);
  components.map(component => Vue.component(component.name, component))
//   MetaInfo.install(Vue)
//   Vue.prototype.$loading = WLoadingBar
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  MAlert,
  MRow
}
