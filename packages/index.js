
import WAlert from './alert/index'


const components = [

  WAlert,
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
  WAlert,
}
