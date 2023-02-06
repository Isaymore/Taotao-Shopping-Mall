<template>
  <div class="login-wrap">
    <img class="login-bg-img" src="../../assets/img/xingye.jpeg" alt="" />
    <van-form @submit="onSubmit">
      <van-field
        class="login-input"
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        class="login-input"
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div class="login-bottom">
        <van-button round block type="success" native-type="submit">
          {{loginStatus ? '登录' : '注册'}}
        </van-button>
        <a class="register" @click="changeLoginStatus">{{
          loginStatus ? "没有账号，点击快速注册" : "去登录"
        }}</a>
      </div>
    </van-form>
  </div>
</template>

<script lang="ts">
// vue-class-component  vue的类组件写法
import { Vue, Options } from "vue-class-component";
@Options({
  components: {
    // 组件声明
  },
})
export default class Login extends Vue {
  username: string = "xiaobin";
  password: string = "123456";
  loginStatus: boolean = true; // 显示登录按钮和快速注册文字
  // 提交表单且验证通过后触发
  onSubmit(values): void {
    console.log("submit", values);
  }
  changeLoginStatus(): void {
    this.loginStatus = !this.loginStatus;
  }
}
</script>

<style lang="less" scoped>
@import url("~@/assets/less/login.less");
</style>