<template>
    <div class="rating_page">
        <head-top head-title="我的优惠" go-back="true"></head-top>
        <section v-if="!showLoading">
            <section class="category_title">
                <span>红包</span>
                <span>商家代金券</span>
            </section>
            <transition name="router-fade">
                <section>
                    <section class="hongbao_container">
                        <header class="hongbao_title">
                            <section class="total_number">
                                有<span>3</span>个红包即将过期
                            </section>
                            <section class="hongbao_description">
                                <img src="../../images/description.png" height="24" width="24">
                                <router-link to="" class="hongbao_detail">红包说明</router-link>
                            </section>
                        </header>
                        <ul class="hongbao_list_ul">
                            <li class="hongbao_list_li">
                                <section class="list_item">
                                    <div class="list_item_left">
                                        <span>¥12.12</span>
                                        <p>满20元可用</p>
                                    </div>
                                    <div class="list_item_right">
                                        <h4>红包名称</h4>
                                        <p>11.11-11.20</p>
                                        <p>可用手机号13524268216</p>
                                    </div>
                                    <div class="time_left">剩3日</div>
                                </section>
                                <footer class="list"></footer>
                            </li>
                        </ul>
                    </section>
                    <router-link to="" class="history_hongbao">
                        <span class="check_history">查看历史红包</span>
                        <svg class="history_right">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                        </svg>
                    </router-link>
                    <footer class="hongbao_footer">
                        <router-link to="" class="hongbao_style" style="border-right:1px solid #f5f5f5">
                            兑换红包
                        </router-link>
                        <router-link to="" class="hongbao_style">
                            推荐有奖
                        </router-link>
                    </footer>
                </section>
            </transition>
            <transition name="router-fade">
                <section class="voucher_container">
                    <section class="hongbao_description voucher_header">
                        <img src="../../images/description.png" height="24" width="24">
                        <router-link to="" class="hongbao_detail">商家代金券说明</router-link>
                    </section>
                    <section class="unable_use">
                        <img src="../../images/voucher.png" height="170" width="300">
                    </section>
                </section>
            </transition>
        </section>
    </div>
</template>
<script>
   import headTop from 'src/components/header/head'
    export default {
        data(){
            return{
              showLoading:false, 
            }
        },
        components:{
            headTop
        }
    }
</script>
<style lang="scss" scoped>
    @import 'src/style/mixin';
  
    .rating_page{
        padding-top: 1.95rem;
        p, span{
            font-family: Helvetica Neue,Tahoma,Arial;
        }
    }
    .category_title{
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 2rem;
        background-color: #fff;
        span{
            text-align: center;
            @include sc(.65rem, #333);
            padding-bottom: .2rem;
            border-bottom: 0.1rem solid #fff;
        }
        .choosed{
            border-bottom-color: $blue;
            color: $blue;
        }
    }
    .hongbao_description{
        display: flex;
        align-items: center;
        img{
            @include wh(.6rem, .6rem);
            margin-right: .2rem;
        }
        .hongbao_detail{
            color: $blue;
        }
    }
    .hongbao_container{
        padding: 0 .7rem;
        .hongbao_title{
            @include fj;
            font-size: .5rem;
            line-height: 2rem;
            .total_number{
                color: #666;
                span{
                    color: #ff5340;
                }
            }
        }
        .hongbao_list_ul{
            .hongbao_list_li{
                background: #fff url(../../images/hongbao.png) repeat-x ;
                background-size: .5rem .2rem;
                margin-bottom: 0.5rem;
                border-radius: 0.25rem;
                .list_item{
                    @include fj;
                    padding: 1rem 0.5rem .8rem;
                    .list_item_left{
                        font-size: 0;
                        border-right: 0.025rem dotted #ccc;
                        flex: 1;
                        span:nth-of-type(1){
                            @include sc(.75rem, #ff5340);
                            font-weight: bold;
                        }
                        span:nth-of-type(2){
                            @include sc(1.5rem, #ff5340);
                        }
                        span:nth-of-type(3), span:nth-of-type(4){
                            @include sc(0.8rem, #ff5340);
                            font-weight: bold;
                        }
                        p{
                            @include sc(0.4rem, #999);
                        }
                    }
                    .list_item_right{
                        flex: 2;
                        margin-left: 1.5rem;
                        h4{
                            @include sc(.7rem, #666);
                            margin-left: -.7rem;
                        }
                        p{
                            list-style-type: disc;
                            margin-left: -.7rem;
                            @include sc(.4rem, #999);   
                        }
                    }
                    .time_left{
                        @include sc(.75rem, #ff5340);
                    }
                }
                .list_item_footer{
                    background-color: #f9f9f9;
                    padding: .4rem .4rem;
                    border-bottom-left-radius: 0.25rem;
                    border-bottom-right-radius: 0.25rem;
                    p{
                        list-style-type: disc;
                        @include sc(.4rem, #999);
                        margin-left: .4rem;
                    }
                }
            }
        }
    }
    .history_hongbao{
        padding: .5rem 0 2.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        .check_history{
            @include sc(.5rem, #999);
            margin-right: .2rem;
        }
        .history_right{
            @include wh(.4rem, .4rem);
            fill: #aaa;
        }
    }
    .hongbao_footer{
        position: fixed;
        bottom: 0;
        width: 100%;
        background-color: #fff;
        display: flex;
        .hongbao_style{
            flex: 1;
            line-height: 2rem;
            text-align: center;
            @include sc(.7rem, #555);
        }
    }
    .voucher_container{
        .voucher_header{
            font-size: .5rem;
            justify-content: flex-end;
            line-height: 2rem;
            margin-right: .5rem;
        }
        .unable_use{
            text-align: center;
            margin-top: 4rem;
            img{
                @include wh(6rem, 3.4rem);
            }
            p:nth-of-type(1){
                @include sc(.7rem, #666);
                margin-top: .4rem;
            }
            p:nth-of-type(2){
                @include sc(.5rem, #999);
                margin-top: .3rem;
                margin-bottom: .3rem;
            }
            .download_app{
                background-color: #56d176;
                @include sc(.65rem, #fff);
                padding: .3rem;
                border-radius: .15rem;
            }
        }
    }
    .router-fade-enter-active, .router-fade-leave-active {
        transition: opacity .3s;
    }
    .router-fade-enter, .router-fade-leave-active {
        opacity: 0;
    }
    .router-slid-enter-active, .router-slid-leave-active {
        transition: all .4s;
    }
    .router-slid-enter, .router-slid-leave-active {
        transform: translate3d(2rem, 0, 0);
        opacity: 0;
    }
</style>

