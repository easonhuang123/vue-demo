import Toast from './toast'

let toastInstance

function getToastInstance () {
    toastInstance = toastInstance || Toast.newInstance()
    return toastInstance
}

function update (props) {
    let instance = getToastInstance(props)
    instance.update(props)
}

export default {
    toast (props) {
        update(props)
    },
    destroy () {
        let instance = getToastInstance()
        toastInstance = null
        instance.destroy()
    }
}
