<template>
  <div>
      <button @click='dialog' class='home__btn'>dialog组件</button>
      <button @click='loading' class='home__btn'>loading组件</button>
      <button @click='toast' class='home__btn'>toast组件</button>
  </div>
</template>

<script>
export default {
    methods: {
        dialog () {
            this.$dialog.dialog({
                dialog: {
                    show: true,
                    msg: '我是dialog~爱我你怕了吗？'
                },
                callback: this.confirm
            })
        },
        loading () {
            this.$loading.loading()
            setTimeout(() => {
                this.$loading.destroy()
            }, 2000)
        },
        toast () {
            this.$toast.toast({
                msg: '我是toast~'
            })
            setTimeout(() => {
                this.$toast.destroy()
            }, 2000)
        },
        confirm () {
            this.$toast.toast({
                msg: '怕了怕了'
            })
            setTimeout(() => {
                this.$toast.destroy()
            }, 2000)
        }
    }
}
</script>

<style lang="less">
.home__btn{
 background-color: #41B883;
 color: #ffffff;
 height: .5rem;
 width: 1.2rem;
 margin: .3rem;
 border-radius: .5rem;
}
</style>

