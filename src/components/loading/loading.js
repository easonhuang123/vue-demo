import Loading from './loading.vue'
import Vue from 'vue'

Loading.newInstance = (p) => {
    const Instance = new Vue({
        render (h) {
            return h(Loading)
        }
    })
    const component = Instance.$mount()
    document.body.appendChild(component.$el)
    const loading = Instance.$children[0]
    return {
        component: loading,
        destroy () {
            document.body.removeChild(document.getElementById('loading'))
        }
    }
}

export default Loading
