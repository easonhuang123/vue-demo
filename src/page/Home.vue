<template>
    <div>
        <button @click='dialog' class='home__btn'>dialog组件</button>
        <button @click='loading' class='home__btn'>loading组件</button>
        <button @click='toast' class='home__btn'>toast组件</button>
        <SearchBar></SearchBar>
        <button @click='goToTop' class='top__btn' title="回到顶部">顶</button>
        <div class='bottom_line'>
            <p>我是底线~</p>
            <hr/>
        </div>
    </div>    
</template>

<script>
import SearchBar from '../components/SearchBar'
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
        },
        goToTop () {
            let timer = null
            timer = setInterval(() => {
                let osTop = document.documentElement.scrollTop || document.body.scrollTop
                var isSpeed = Math.floor(-osTop / 6)
                document.documentElement.scrollTop = document.body.scrollTop = osTop + isSpeed
                if (osTop === 0) {
                    clearInterval(timer)
                }
            }, 30)
        }
    },
    components: { SearchBar }
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
.bottom_line{
    position: absolute;
    left: 50%;
    width: 100%;
    top:40rem;
    margin-bottom: .5rem;
    transform: translate(-50%, 0);
}
.top__btn{
    position: fixed;
    top:80%;
    left:90%;
    background-color: #41B883;
    color: #ffffff;
    height: .5rem;
    width: .5rem;
    border-radius: .5rem;
    font-size: .25rem;
}

</style>

<style lang="less">
@import '../style/iconfont/iconfont.css';
</style>

