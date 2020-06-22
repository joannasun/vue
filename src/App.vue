<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    
    <tab-bar>
      <tab-bar-item path='/home' activeColor='blue'>
        <img slot='item-icon' src="./assets/img/TabBar/logo.png" alt="">
        <img slot='item-icon-active' src="./assets/img/TabBar/active.png" alt="">
        <div slot='item-text'>首页</div>
      </tab-bar-item>
      <tab-bar-item path='/category'>
        <img slot='item-icon' src="./assets/img/TabBar/logo.png" alt="">
        <img slot='item-icon-active' src="./assets/img/TabBar/active.png" alt="">
        <div slot='item-text'>分类</div>
      </tab-bar-item>
      <tab-bar-item path='/cart'>
        <img slot='item-icon' src="./assets/img/TabBar/logo.png" alt="">
        <img slot='item-icon-active' src="./assets/img/TabBar/active.png" alt="">
        <div slot='item-text'>购物车</div>
      </tab-bar-item>
      <tab-bar-item path='profile'>
        <img slot='item-icon' src="./assets/img/TabBar/logo.png" alt="">
        <img slot='item-icon-active' src="./assets/img/TabBar/active.png" alt="">
        <div slot='item-text'>我的</div>
      </tab-bar-item>
    </tab-bar>
    
  </div>
</template>

<script>
import TabBar from './components/tabbar/TabBar'
import TabBarItem from './components/tabbar/TabBarItem'

export default {
  name: 'App',
  components:{
    TabBar,
    
    TabBarItem
  }
}
</script>

<style>
  @import './assets/css/base.css';
  
</style>
