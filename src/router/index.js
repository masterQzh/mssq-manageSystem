import Vue from 'vue'
import Router from 'vue-router'

// 引入组件
// 登录
import login from '@/components/login/login'

// 管理主页
import manageSystem from '@/components/manageSystem'
// 首页
import home from '@/components/home'
// 服务管理
import serviceManage from '@/components/serviceManage/serviceManage'
// ----发布服务----
import newAddService from '@/components/serviceManage/sendManage/newAddService'//新增服务
import draftBox from '@/components/serviceManage/sendManage/draftBox'//草稿箱
import serviceCheck from '@/components/serviceManage/sendManage/serviceCheck'//服务审核
import serviceSend from '@/components/serviceManage/sendManage/serviceSend'//服务发布
import trackManage from '@/components/serviceManage/sendManage/trackManage'//跟踪管理

// ----报名管理----
import citizenSignUp from '@/components/serviceManage/signUpManage/citizenSignUp'//居民报名审核
import signUpForm from '@/components/serviceManage/signUpManage/signUpForm'//报名审核一览表
// ----服务结果----
import serviceResult from '@/components/serviceManage/serviceResult/serviceResult'//服务结果
// 统计分析
import totalAnalyze from '@/components/totalAnalyze/totalAnalyze'//统计分析
import serviceType from '@/components/totalAnalyze/serviceType'//服务类型占比分析
import serviceHot from '@/components/totalAnalyze/serviceHot'//服务热度分析
//信息发布
import infoSend from '@/components/infoSend/infoSend'//信息发布
import communityInfoSend from '@/components/infoSend/communityInfoSend'//社区信息发布
import serviceInfoSend from '@/components/infoSend/serviceInfoSend'//服务信息发布
//社区管理
import communityManage from '@/components/communityManage/communityManage'//社区管理
import citizenRegister from '@/components/communityManage/citizenRegister'//居民注册认证
import newAddWorker from '@/components/communityManage/newAddWorker'//新增工作人员
import workerAccount from '@/components/communityManage/workerAccount'//工作人员账户管理
import AddServiceOrganize from '@/components/communityManage/AddServiceOrganize'//新增服务机构
import ServiceOrganizeManage from '@/components/communityManage/ServiceOrganizeManage'//服务机构管理



// 使用路由
Vue.use(Router)
        // 路由匹配规则
export default new Router({
  routes: [
         // 默认重定向
    {path: '/', redirect: {name: 'login'}},
         // 登录
    {
      path: '/login',
      name: 'login',
      component: login
    },
         // 管理主页
    {
      name: 'manageSystem',
      path: '/manageSystem',
      component: manageSystem,

         // 子路由
      children: [
        {path: '/manageSystem', redirect: {name: 'home'}},
        {
          // 首页
          name: 'home',
          path: '/home',
          component: home,
        },


        // 服务管理
        {
          name: 'serviceManage',
          path: '/serviceManage',
          component: serviceManage,
        },
        // ----发布服务----
        {
          // 新增服务
          name: 'newAddService',
          path: '/newAddService',
          component: newAddService,
        },
        {
          // 草稿箱
          name: 'draftBox',
          path: '/draftBox',
          component: draftBox,
        },
        {
          // 服务审核
          name: 'serviceCheck',
          path: '/serviceCheck',
          component: serviceCheck,
        },
        {
          // 服务发布
          name: 'serviceSend',
          path: '/serviceSend',
          component: serviceSend,
        },
        {
          // 跟踪管理
          name: 'trackManage',
          path: '/trackManage',
          component: trackManage,
        },

        // ----报名管理----
        {
          // 居民报名审核
          name: 'citizenSignUp',
          path: '/citizenSignUp',
          component: citizenSignUp,
        },
        {
          // 报名审核一览表
          name: 'signUpForm',
          path: '/signUpForm',
          component: signUpForm,
        },
        // ----服务结果----
        {
          name: 'serviceResult',
          path: '/serviceResult',
          component: serviceResult,
        },

        //统计分析
        {
          name: 'totalAnalyze',
          path: '/totalAnalyze',
          component: totalAnalyze,
        },
        // ----服务类型占比分析----
        {
          name: 'serviceType',
          path: '/serviceType',
          component: serviceType,
        },
        // ----服务热度分析----
        {
          name: 'serviceHot',
          path: '/serviceHot',
          component: serviceHot,
        },

        //信息发布
        {
          name: 'infoSend',
          path: '/infoSend',
          component: infoSend,
        },
        // ----社区信息发布----
        {
          name: 'communityInfoSend',
          path: '/communityInfoSend',
          component: communityInfoSend,
        },
        // ----服务信息发布----
        {
          name: 'serviceInfoSend',
          path: '/serviceInfoSend',
          component: serviceInfoSend,
        },

        //社区管理
        {
          name: 'communityManage',
          path: '/communityManage',
          component: communityManage,
        },
        // ----居民注册认证----
        {
          name: 'citizenRegister',
          path: '/citizenRegister',
          component: citizenRegister,
        },
        // ----新增工作人员----
        {
          name: 'newAddWorker',
          path: '/newAddWorker',
          component: newAddWorker,
        },
        // ----工作人员账户管理----
        {
          name: 'workerAccount',
          path: '/workerAccount',
          component: workerAccount,
        },
        // ----新增服务机构----
        {
          name: 'AddServiceOrganize',
          path: '/AddServiceOrganize',
          component: AddServiceOrganize,
        },
        // ----服务机构管理----
        {
          name: 'ServiceOrganizeManage',
          path: '/ServiceOrganizeManage',
          component: ServiceOrganizeManage,
        },
      ]
    }
  ]
})
