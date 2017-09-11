<template>
    <transition name="fade">
        <div class='toast' id='toast'>
            <p>{{msg}}</p>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'toast',
    props: ['msg']
}
</script>

<style lang="less">
.toast {
    width: 3.68rem;
    height: 1.04rem;
    font-size: .28rem;
    color: #ffffff;
    background-color: #0C213F;
    opacity: 0.6;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: .14rem;
    p {
        text-align: center;
        line-height: 1.04rem;
    }
}
</style>


