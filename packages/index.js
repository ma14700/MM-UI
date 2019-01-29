
import MAlert from './alert/index'
import MRow from './row/index'
import MCol from './col/index'

const components = [
  MRow,
  MAlert,
  MCol
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
  MRow,
  MCol
}
