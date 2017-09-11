import Toast from './toast.vue'
import Vue from 'vue'

Toast.newInstance = (properties) => {
    const _props = properties || {}
    const Instance = new Vue({
        data: _props,
        render (h) {
            return h(Toast, {
                props: _props
            })
        }
    })
    const component = Instance.$mount()
    document.body.appendChild(component.$el)
    const toast = Instance.$children[0]
    return {
        update (options) {
            toast.msg = options.msg
        },
        component: toast,
        destroy () {
            document.body.removeChild(document.getElementById('toast'))
        }
    }
}

export default Toast
