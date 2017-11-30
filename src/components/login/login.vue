<template>
  <!--登录页-->
  <div class="loginPage">
    <!--登录盒子-->
    <div class="loginBox">
      <!--登录内容-->
      <div class="loginContainer" @keyup.enter="goLogin('loginForm')">
        <h4>用户登录</h4>
        <el-form :rules="loginRules" ref="loginForm" :model="loginForm">
          <!--用户名-->
          <el-form-item prop="userName" class="formBox">
            <el-input v-model="loginForm.userName" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <!--密码-->
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" type="password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <!--登录-->
          <el-form-item>
            <el-button class="login" type="info" @click="goLogin('loginForm')">登录</el-button>
          </el-form-item>
          <!--立即注册/忘记密码-->
          <el-form-item class="regOrForget">
            <el-button @click="dialogFormVisible = true" class="Register fl" type="text">立即注册</el-button>
            <el-button @click="forgetFormVisible = true" class="forgetPassword fr" type="text">忘记密码</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>

    <!--注册弹出框-->
    <el-dialog title="注册" :visible.sync="dialogFormVisible" width="500px">
      <el-form :model="regForm" :rules="regRules" ref="regForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="userName">
          <el-input type="text" v-model="regForm.userName" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="regForm.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="regForm.checkPass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('regForm')">提交</el-button>
          <el-button @click="resetForm('regForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <!--忘记密码框==>todo-->
    <el-dialog title="获取密码" :visible.sync="forgetFormVisible" width="500px">
      <el-form ref="regForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="手机号码" prop="userName">
          <el-input type="text" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="userName">
          <el-input type="text" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">提交</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
//      注册密码认证
      var validatePass = (regRules, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.regForm.checkPass !== '') {
            this.$refs.regForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (regRules, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.regForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
//         注册

//        注册信息
        regForm: {
          userName: '',
          checkPass: '',
          password: '',
        },
//        注册提醒提示
        regRules: {
          userName: [
            {required: true, message: '请输入正确的账号', trigger: 'blur'},
            {min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur'}
          ],
          password: [
            {validator: validatePass, trigger: 'blur'},
            {min: 6, message: '密码大于6位数', trigger: 'blur'}
          ],
          checkPass: [
            {validator: validatePass2, trigger: 'blur'},
            {min: 6, message: '密码大于6位数', trigger: 'blur'}
          ],
        },

//        默认隐藏状态
        dialogFormVisible: false,
        forgetFormVisible: false,

//        登录信息
        loginForm: {
          userName: '',
          password: '',
        },
//        登录失去焦点提示
        loginRules: {
          userName: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
//            {min: 6, message: '密码大于6位数', trigger: 'blur'}
          ],
        },
      }
    },


//      方法
    methods: {

//      登录
      goLogin(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            sessionStorage.setItem("user", JSON.stringify(this.loginForm));
            this.$store.commit("user", this.loginForm.userName)
            this.$router.push("/manageSystem");
          } else {
            console.log('ERROR commit');
            return false;
          }
        });
      },


//    注册=> 提交
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            sessionStorage.setItem("user", JSON.stringify(this.regForm));
            console.log(this.regForm, 666666)
            this.$store.commit("user", this.regForm.userName)
            //跳转到登录后的页面
            this.$router.push('/manageSystem');
          } else {
            alert('error submit!!');
            return false;
          }
        });
      },

//     注册=> 重置
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }


</script>

<style lang="less" scoped>
  .loginPage {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: green;
    .loginBox {
      width: 300px;
      height: 300px;
      margin: 200px auto;
      background-color: greenyellow;
      .loginContainer {
        padding: 0 20px;
        h4 {
          padding-top: 15px;
          text-align: center;
          margin-bottom: 15px;
        }
        .login {
          width: 100%;
        }
        .regOrForget {
          .Register {
            color: #A5A5A5;
          }
          .forgetPassword {
            color: #A5A5A5;
          }
        }
      }
    }
  }

</style>
