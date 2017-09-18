<template>
    <div class='search'>
        <label class='search__container':class='{active:isActive}' >
            <div class='search__body' @click="switchSearch">
                <i class='search__icon iconfont icon-sousuo'></i>
                <div class='search__text'>搜索 标题</div>
                <form autocomplete="off" class='search__input' onsubmit="return false" action=".">
                    <input 
                        class='iconfont icon-sousuo' 
                        type='search' 
                        placeholder="搜索 标题" 
                        v-model="value"
                        @search="search"
                    />
                </form>
                <i class='search__delete iconfont icon-shanchu' v-show='value' @click="clearInput"></i>
            </div>
            <div class='search__cancle' @click.prevent='cancle'>取消</div>
        </label>    
    </div>
</template>

<script>
export default {
    data () {
        return {
            isActive: false,
            value: ''
        }
    },
    methods: {
        switchSearch () {
            this.isActive = true
        },
        search () {
            this.value = this.value.trim()
        },
        clearInput () {
            this.value = ''
        },
        cancle () {
            this.value = ''
            this.isActive = false
        }
    }
}
</script>


<style lang="less">
    input::-ms-clear,
    input::-ms-reveal {
        display: none;
    }

    input[type="search"]::-webkit-search-cancel-button {
        display: none;
    }

    .search{
        background-color: #41B883;   
        width: 100%;
        height: .88rem;
        z-index: 99;
        .search__container{
            display: -webkit-box;
            display: -ms-flexbox;
            .search__body{
                height: .58rem;
                line-height: .58rem;
                margin: .14rem .24rem;
                border-radius:2rem;
                font-size: .24rem;
                color:#768893;
                background: #f4f6f9;
                position: relative;
                -webkit-box-flex: 1;
                -ms-flex: 1;
                display: -webkit-box;
                display: -ms-flexbox;
                -webkit-box-pack: center;
                -webkit-box-align: center;
                -ms-flex-align: center;
                .search__icon{
                    font-size: .24rem;
                    color:#768893;
                    vertical-align: middle;
                    margin-left: 0.2rem;
                }
                .search__text{
                    display: inline;
                    font-size: .24rem;
                    color:#768893;
                    line-height: 0.36rem;
                    padding-left: 0.1rem;
                }
                .search__input{
                    padding-left: 0.2rem;
                    -webkit-box-flex: 1;
                    color:#768893;
                    display: none;
                    overflow: hidden;
                    input{
                        width: 100%;
                        background: #f4f6f9;
                        letter-spacing: -0.14px;
                        border: 0;
                        -webkit-appearance: none;
                        font-size: 0.24rem;
                        color: #3F3F3F;
                        letter-spacing: -0.14px;
                        padding-left: 0.1rem;
                        border-top-right-radius: 50%;
                        border-bottom-right-radius: 50%;
                    }
                }
                .search__delete{
                    display: none;
                    font-size: .3rem;
                    margin-right: 0.16rem;
                }
            }
            .search__cancle{
                display: none;
                height: .58rem;
                line-height: .58rem;
                padding: .14rem .24rem .14rem 0;
                border-radius:2rem;
                font-size: .24rem;
                color:#ffffff;
            }
            &.active{
                .search__text{
                    display: none;
                }
                .search__input, .search__delete,.search__cancle{
                    display: block;
                }
            }
        }  
    }
</style>
