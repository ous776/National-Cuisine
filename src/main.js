import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import router from './router/index'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faClose, faSearch, faTimes, faUserSecret } from '@fortawesome/free-solid-svg-icons'



library.add(faSearch, faClose, faTimes, faBars, faUserSecret)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.mount('#app')
