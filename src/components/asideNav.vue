<template>
  <div class="asideNav">
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b" router>
          <!--首页-->
          <div class="homeBox">
            <el-menu-item index="home" router>
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>
          </div>
          <!--服务管理-->
          <div class="serviceManage">
            <el-menu-item index="serviceManage" router>
              <i class="el-icon-setting"></i>
              <span slot="title">服务管理</span>
            </el-menu-item>
            <div class="serviceMain" style="text-align: center">
              <el-submenu index="sendServiceBox">
                <template slot="title" >发布服务</template>
                <el-menu-item index="newAddService">新增服务</el-menu-item>
                <el-menu-item index="draftBox">草稿箱</el-menu-item>
                <el-menu-item index="serviceCheck">服务审核</el-menu-item>
                <el-menu-item index="serviceSend">服务发布</el-menu-item>
                <el-menu-item index="trackManage">跟踪管理</el-menu-item>
              </el-submenu>
              <el-submenu index="signUpManage" >
                <template slot="title">报名管理</template>
                <el-menu-item index="citizenSignUp">居民报名审核</el-menu-item>
                <el-menu-item index="signUpForm">报名审核一览表</el-menu-item>
              </el-submenu>
              <el-menu-item index="serviceResult">服务结果</el-menu-item>
            </div>
          </div>
          <!--统计分析-->
          <div class="totalAnalyzeBox">
            <el-menu-item index="totalAnalyze">
              <i class="el-icon-date"></i>
              <span slot="title">统计分析</span>
            </el-menu-item>
            <div class="totalAnalyzeMain" style="text-align: center">
              <el-menu-item index="serviceType">服务类型占比分析</el-menu-item>
              <el-menu-item index="serviceHot">服务热度分析</el-menu-item>
            </div>

          </div>
          <!--信息发布-->
          <div class="infoSendBox">
            <el-menu-item index="infoSend" >
              <i class="el-icon-edit-outline"></i>
              <span slot="title">信息发布</span>
            </el-menu-item>
            <div class="infoSendMain" style="text-align: center;color: black">
              <el-menu-item index="communityInfoSend">社区信息发布</el-menu-item>
              <el-menu-item index="serviceInfoSend">服务信息发布</el-menu-item>
            </div>
          </div>
          <!--社区管理-->
          <div class="communityManageBox" >
            <el-menu-item index="communityManage">
              <i class="el-icon-news"></i>
              <span slot="title">社区管理</span>
            </el-menu-item>
            <div class="communityManageMain" style="text-align: center">
              <el-menu-item index="citizenRegister">居民注册认证</el-menu-item>
              <el-menu-item index="newAddWorker">新增工作人员</el-menu-item>
              <el-menu-item index="workerAccount">工作人员账户管理</el-menu-item>
              <el-menu-item index="AddServiceOrganize">新增服务机构</el-menu-item>
              <el-menu-item index="ServiceOrganizeManage">服务机构管理</el-menu-item>
            </div>
          </div>
        </el-menu>
      </el-col>
    </el-row>


  </div>

</template>

<script>
  export default {

  }
</script>

<style lang="less" scoped>
  .asideNav {
    width: 200px;
  }
  .el-menu-item{
    /*font-size: 16px;*/
    height: 60px;
    line-height: 60px;
  }
 .el-submenu__title{
    height: 40px;
    line-height: 40px;

  }


</style>
