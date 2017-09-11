import Dialog from './dialog.vue'
import Vue from 'vue'

Dialog.newInstance = (properties) => {
    const _props = properties || {}
    const Instance = new Vue({
        data: _props,
        render (h) {
            return h(Dialog, {
                props: _props
            })
        }
    })
    const component = Instance.$mount()
    document.body.appendChild(component.$el)
    const dialog = Instance.$children[0]
    return {
        update (options) {
            dialog.dialog.show = options.dialog.show
            dialog.dialog.msg = options.dialog.msg
            dialog.callback = options.callback
        },
        component: dialog,
        destroy () {
            document.body.removeChild(document.getElementById('dialog'))
        }
    }
}

export default Dialog
