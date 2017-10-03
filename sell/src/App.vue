<template>
  <div>
   <v-header></v-header>
    <ul class="tab">
        <li class="tab-item"><router-link to="/Goods">商品</a></li>
        <li class="tab-item"><router-link to="/ratings">评论</a></li>
        <li class="tab-item"><router-link to="/seller">商家</a></li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
	 import header from './components/header/header.vue';
	 export default{
    components: {
      'v-header': header
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
   .tab
       display:flex
       width:100%
       height:40px
       lie-height:40px
       .tab-item
          flex:1
          text-align:center
</style>
