
Vue.component('content-type', {
  template: '#modal-template',
  props: {
    ccc: {
      type: String,
      default: '0000'
    }
  }
})
var app = new Vue({
  el: '#app',
  data() {
    return {
      text: '123',
      list: [
        1,2,3
      ],
      type: 'type'
    }
  }
})
console.log(app)