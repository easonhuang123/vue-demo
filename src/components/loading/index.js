import Loading from './loading'

let loadingInstance

function getLoadingInstance () {
    loadingInstance = loadingInstance || Loading.newInstance()
    return loadingInstance
}

export default {
    loading () {
        getLoadingInstance()
    },
    destroy () {
        let instance = getLoadingInstance()
        loadingInstance = null
        instance.destroy()
    }
}
