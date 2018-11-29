<template>
    <div class="page_container">
       <head-top head-title="兑换会员" go-back="true"></head-top>
       <p class="buy_for">成功兑换后将关联到当前账号：<span>{{userInfo.username}}</span></p>
       <form class="form_style">
           <input type="text" name="cartNumber" maxlength="10" placeholder="请输入10位卡号" v-model="cardNumber">
           <input type="text" name="passwWord" maxlength="6" placeholder="请输入6为卡密" v-model="pwd">
       </form>
       <p class="determine" :class="{could_pay:validateInput}" @click="confrimPay">兑换</p>
       <footer class="Binding">
           <h3>-温馨提示-</h3>
           <p>新兑换的会员服务，权益以会员说明为准。</p>
           <p>月卡：<b>30次</b>减免配送费。</p>
           <p>季卡：<b>90次</b>减免配送费。</p>
           <p>年卡：<b>360次</b>减免配送费。</p>
           <p>仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（1个月按31天计算）。</p>
       </footer>
       <alert-tip v-if="showAlert" :alertText="alertText" @closeTip="showAlert=false"></alert-tip>
    </div>
</template>
<script>
   import headTop from 'src/components/header/head'
   import alertTip from 'src/components/common/alertTip'
   import {mapState,mapMutations} from 'vuex'
   import {vipCart} from 'src/service/getData'
    export default {
        data(){
            return{
                cardNumber:'',//卡号
                pwd:'',//卡密,
                showAlert:false,
                alertText:'',
            }
        },
        computed:{
            ...mapState([
               'userInfo'
            ]),
            validateInput:function(){//验证卡号和卡密的长度
               if((/^\d{10}$/.test(this.cardNumber))&&(/^\d{6}$/.test(this.pwd))){
                   return true;
               }else{
                   return false;
               }
            }
        },
        components:{
            headTop,
            alertTip
        },
        methods:{
            async confrimPay(){
               if(this.validateInput){
                   let res = await vipCart(this.userInfo.id,this.cardNumber,this.pwd);
                   if(res.message){
                       this.showAlert = true;
                       this.alertText = res.message; 
                   }else if(res.name){
                       this.showAlert = true;
                       this.alertText = res.name;
                   }
               }
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import 'src/style/mixin';
  
    .page_container{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #f5f5f5;
        z-index: 202;
        padding-top: 1.95rem;
        p, span, input{
            font-family: Helvetica Neue,Tahoma,Arial;
        }
    }
    .buy_for{
        @include sc(.6rem, #666);
        line-height: 2rem;
        padding-left: 0.7rem;
        span{
            font-weight: bold;
        }
    }
    .form_style{
    	display: flex;
    	flex-direction: column;
    	input{
    		border-bottom: 1px solid #f5f5f5;
    		height: 2rem;
    		@include sc(.65rem, #999);
    		padding-left: .7rem;
    	}
    }
    .determine{
        background-color: #ccc;
        @include sc(.7rem, #fff);
        text-align: center;
        margin: 0 .7rem;
        line-height: 1.8rem;
        border-radius: 0.2rem;
        margin-top: 0.7rem;
        font-weight: bold;
    }
    .could_pay{
    	background-color: #4cd964;
    }
    .Binding{
    	margin-top: 1rem;
    	h3{
    		text-align: center;
    		font-weight: normal;
    		@include sc(.65rem, #aaa);
    		margin-bottom: .6rem;
    	}
    	p, b{
    		@include sc(.5rem, #aaa);
    		line-height: .8rem;
    	}
    	p{
    		padding-left: 2rem;
    	}
    }
</style>
