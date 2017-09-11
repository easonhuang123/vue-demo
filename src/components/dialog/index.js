import Dialog from './dialog'

let dialogInstance

function getDialogInstance (props) {
    dialogInstance = dialogInstance || Dialog.newInstance(props)
    return dialogInstance
}

function update (props) {
    let instance = getDialogInstance(props)
    instance.update(props)
}

export default {
    dialog (props) {
        update(props)
    },
    destroy () {
        let instance = getDialogInstance()
        dialogInstance = null
        instance.destroy()
    }
}
