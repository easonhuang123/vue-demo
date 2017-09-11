<template>
    <transition name="fade">
        <div v-show='dialog.show' id='dialog'>
            <div class="overlayer"></div>
            <div class="dialog bt_c-dialog">
                <div class="dialog-main">
                    <p class="title">{{dialog.msg}}</p>
                </div>
                <div class="group-btn">
                    <button class="btn-no" @click='cancle'>取消</button>
                    <button class="btn-yes" @click='confirm'>确定</button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'dialog',
    props: {
        dialog: {
            show: {
                default: false
            },
            msg: {
                default: '1111'
            }
        },
        callback: Function
    },
    methods: {
        cancle () {
            this.dialog.show = false
        },
        confirm () {
            this.dialog.show = false
            this.callback()
        }
    }
}
</script>

<style lang="less">
.overlayer {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(14, 46, 70, 0.36);
    z-index: 99;
}

.dialog {
    width: 5.34rem;
    height: 2.8rem;
    background: #fff;
    position: fixed;
    left: 50%;
    top: 50%;
    border-radius: .12rem;
    border: 1px solid #eee;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    z-index: 9999;
    .dialog-main {
        display: table;
        width: 100%;
        box-sizing: border-box;
        height: 1.9rem;
        padding: 0.2rem;
        text-align: center;
        color: #000;
        line-height: .44rem;
        .title {
            vertical-align: middle;
            display: table-cell;
            font-size: .32rem;
        }
    }
    .group-btn {
        background: transparent;
        width: 100%;
        border-top: 1px solid #ddd;
        position: fixed;
        bottom: 0;
        left: 0;
        text-align: center;
        z-index: 52;
        button {
            height: .84rem;
            line-height: .84rem;
            font-size: .32rem;
            color: #3bbaff;
            line-height: .84rem;
            display: block;
            float: left;
            position: relative;
            width: 50%;
        }
        .btn-no {
            color: #999;
        }
        .btn-yes:before {
            content: '';
            display: block;
            height: 40%;
            border-left: 1px solid #ddd;
            position: absolute;
            vertical-align: middle;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            -webkit-transform: translateY(-50%);
        }
    }
}

</style>

