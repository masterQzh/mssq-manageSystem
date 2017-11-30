<template>
  <!--顶部-->
  <div class="headTop">
    <!--顶部内容-->
    <div class="topContent mg_0atuo">
      <!--左边-->
      <div class="topLeft ">
        <h3>精准社区服务管理后台</h3>
      </div>
      <!--<div class="topCentre"></div>-->
      <!--右边-->
      <div class="topRight ">
        <el-dropdown class="login-header">
        <img src="../assets/images/icon_login.png" alt="">
        <div class="userInfo">
          <p class="userName" >{{username}}</p>
          <p class="manager" > 社区服务中心管理员</p>
        </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="loginOut()">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed:{
//    获取用户信息
    username () {
      return  this.$store.state.userName ? this.$store.state.userName : JSON.parse(sessionStorage.getItem("user")).userName
    }
  },
  methods:{
//    退出提示
    loginOut (){
      this.$confirm('是否要退出?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'success'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '退出成功!'
        });
        sessionStorage.removeItem("user");
        this.$router.push('/login');
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消退出'
        });
      });
    }
  }

}
</script>

<style lang="less" scoped>
  .headTop{
    width: 100%;
    height: 60px;
    background-color: skyblue;
    .topContent{
      width: 1200px;
      height: 100%;
      display: flex;
      /*width: auto;*/
      /*min-width: 480px;*/
      justify-content:space-between;
      background-color: antiquewhite;
      .topLeft{
        line-height: 60px;
      }
      .topRight{
        margin-right: 68px;
        img{
          cursor:pointer;
          vertical-align: middle;
          margin: 6px 14px 6px 0;
          width: 48px;
          height: 48px;
          border-radius: 50%;

        }
        .userInfo{
          vertical-align: middle;
          display: inline-block;

        }
      }

    }
  }

</style>
