<template>
    <div class="page_container">
       <head-top head-title="购买记录" go-back="true"></head-top>
       <section class="invoice_container">
           <img src="../../../images/no-log.png">
           <p>没有购买记录</p>
       </section>
    </div>
</template>
<script>
   import headTop from 'src/components/header/head'
    export default {
        data(){
            return{
                
            }
        },
        components:{
            headTop,
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
        background-color: #fff;
        z-index: 202;
        padding-top: 1.95rem;
        p, span{
            font-family: Helvetica Neue,Tahoma,Arial;
        }
    }
    .invoice_container{
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
            @include wh(8rem, 5rem);
            margin-top: 5rem;
        }
        p{
            @include sc(.6rem, #999);
            margin-top: .8rem;
        }
    }
</style>
