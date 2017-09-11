<template>
    <div class="loading" id='loading'>
        <div class="circle-container container1 vertical-middle">
            <div class="circle1"></div>
            <div class="circle2"></div>
            <div class="circle3"></div>
            <div class="circle4"></div>
        </div>
        <div class="circle-container container2 vertical-middle">
            <div class="circle1"></div>
            <div class="circle2"></div>
            <div class="circle3"></div>
            <div class="circle4"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'loading'
}
</script>


<style lang="less">
.loading {
    width: 2rem;
    height: 2rem;
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -1rem;
    margin-top: -1rem;
    z-index: 2000;
    .vertical-middle {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    }
    .circle-container {
        width: .7rem;
        height: .7rem;
        div {
            width: .16rem;
            height: .16rem;
            border-radius: 100%;
            background: #2FA1E8;
            position: absolute;
            -webkit-animation: loading 1s linear infinite;
            animation: loading 1s ease-in-out infinite;
        }
    }
    .container1 {
        .circle1 {
            -webkit-animation-delay: -1s;
            animation-delay: -.9s;
        }
        .circle2 {
            -webkit-animation-delay: -.75s;
            animation-delay: -.7s;
        }
        .circle3 {
            -webkit-animation-delay: -.5s;
            animation-delay: -.5s;
        }
        .circle4 {
            -webkit-animation-delay: -.25s;
            animation-delay: -.3s;
        }
    }
    .container2 {
        -webkit-transform: rotateZ(45deg);
        transform: rotateZ(45deg);
        .circle1 {
            -webkit-animation-delay: -.875s;
            animation-delay: -.8s;
        }
        .circle2 {
            -webkit-animation-delay: -.625s;
            animation-delay: -.6s;
        }
        .circle3 {
            -webkit-animation-delay: -.375s;
            animation-delay: -.4s;
        }
        .circle4 {
            -webkit-animation-delay: -.125s;
            animation-delay: -.2s;
        }
    }
    .circle1 {
        top: 0;
        left: 0;
    }
    .circle2 {
        top: 0;
        right: 0;
    }
    .circle3 {
        bottom: 0;
        right: 0;
    }
    .circle4 {
        bottom: 0;
        left: 0;
    }
}

@-webkit-keyframes loading {
    0%,
    100% {
        -webkit-transform: scale(1.0);
    }
    80% {
        -webkit-transform: scale(0.0);
    }
}

@keyframes loading {
    0%,
    100% {
        -webkit-transform: scale(1.0);
        transform: scale(1.0);
    }
    80% {
        -webkit-transform: scale(0.0);
        transform: scale(0.0);
    }
}
</style>

