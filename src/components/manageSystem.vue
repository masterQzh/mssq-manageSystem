<template>
  <!--管理主页-->
  <div class="manageSystem">
    <!--头部-->
    <head-top></head-top>
    <!--主体-->
      <div class="asideMain mg_0atuo">
        <!--侧边导航-->
        <aside-nav></aside-nav>
        <!--路由动态view-->
        <div class="routerView">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>
      </div>
  </div>
</template>

<script>
  import headTop from '@/components/headTop'
  import asideNav from '@/components/asideNav'
export default {
  data(){
    return{

    }
  },
  components: {
    headTop,
    asideNav,
  },
}
</script>

<style lang="less" scoped>
  .asideMain{
    display: flex;
    width: 1200px;
    height: 1200px;
    margin-top:20px;
    background-color: yellow;
    .routerView{
      background-color: #13ce66;
      flex: 1;
    }

  }

</style>
