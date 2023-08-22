import './assets/main.css'
// import bootstrap from 'bootstrap'

import { createApp, type Component } from 'vue'
import ListAlbumbs from './components/ListAlbums.vue'
import Form from './components/Form.vue'
// import App from './App.vue'

const components: Record<string, Component> = {
  'list-albums': ListAlbumbs,
  'form': Form,
}

Object.entries(components)
  .forEach(([componentName, component]) => {
    [...document.querySelectorAll(`[data-component="${componentName}"]`)].forEach((el) => {
      createApp(component).mount(el)
    })
  })
// createApp(App).mount('#app')

// const observer = new MutationObserver(list => {
//   console.log('mutation list', list)
// });
// observer.observe(document.body, {attributes: true, childList: true, subtree: true})
// perform any DOM change action in your page. e.g. show/hide

