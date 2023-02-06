<template>
  <!-- 页面跳转 router-link组件相当于a标签-->
  <!-- to支持字符串和对象 -->
  <router-link to="/about">Go to About</router-link>
  <br />
  <router-link :to="{ name: 'about' }">about页面1</router-link>
  <br />
  <!-- <router-link :to="{ path: '/about', query: { id: 888 } }"
    >about页面2</router-link
  > -->
  <br />
  <van-button type="primary" @click="onClick1">传参形式-query</van-button>
  <van-button type="primary" @click="onClick2">传参形式-params</van-button>
  <van-button type="primary" @click="onChangeCount">同步更改</van-button>
  <van-button type="primary" @click="onChangeCountAsync">异步更改</van-button>
</template>

<script lang="ts">
// vue-class-component  vue的类组件写法
import { Vue, Options } from "vue-class-component";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
@Options({
  components: {
    // 组件声明
  },
})
export default class HomeView extends Vue {
  uname: string = "星爷";
  router: any = useRouter(); // 路由实例，用于路由跳转
  route: any = useRoute(); // 获取当前路由对象
  store: any = useStore(); // 仓库实例

  // 8大生命周期：数据的初始化一般是在created/mounted
  // 组件创建前
  public beforeCreate(): void {
    console.log("beforeCreate", this.uname);
  }
  // 组件创建后
  public created(): void {
    console.log("created", this.uname);
    console.log("vuex-state-count", this.store.state.count);
    // 通过属性访问
    console.log("vuex-getters-doneTodos", this.store.getters.doneTodos);
    console.log(
      "vuex-getters-doneTodoCount",
      this.store.getters.doneTodosCount
    );
    // 通过方法访问
    const todoById = this.store.getters.getTodoById(2);
    console.log("todoById", todoById, typeof todoById);
  }
  // 组件挂载前，数据渲染前
  public beforeMount(): void {
    const ele = this.$refs.name;
    console.log("beforeMount", ele, document.querySelector("name"));
  }
  // 组件挂载后，数据渲染后
  public mounted(): void {
    const ele = this.$refs.name;
    console.log("mounted", ele);
    setTimeout(() => {
      this.uname = "周星星同学";
    }, 1000);
  }
  // 组件更新前
  public beforeUpdate(): void {
    console.log("beforeUpdate");
  }
  // 组件更新后
  // 数据更新，并且DOM更新，才会触发beforeUpdate和updated钩子函数
  public updated(): void {
    console.log("updated");
  }
  // 组件卸载前
  public beforeUnmount(): void {
    console.log("beforeUnmount");
  }
  // 组件卸载后
  public unmounted(): void {
    console.log("unmounted");
  }
  // 定义方法
  onClick1() {
    console.log("this", this, typeof this);
    // 方法一：使用this.$router
    // this.$router.push({
    //   path: "/about",
    //   query: {
    //     id: 666,
    //   },
    // });
    // 方法二：使用Vue3的新函数useRouter，获取路由实例
    this.router.push({
      path: "/about",
      query: {
        id: 666,
      },
    });
  }
  onClick2() {
    this.router.push({
      // path: "/about",
      // params传参，必须是name，不能是path
      // 因为path保存在缓存里，刷新页面，params参数会丢失
      name: "about",
      params: {
        id: 666,
      },
    });
  }
  onChangeCount(): void {
    // this.store.commit('INCREMENT1')
    this.store.commit("INCREMENT2", 666);
    console.log("同步修改vuex-count", this.store.state.count);
  }
  onChangeCountAsync(): void {
    this.store.dispatch("increment1");
    console.log("异步修改vuex-count", this.store.state.count);
  }
}
</script>

<style lang="less" scoped>
@import url("~@/assets/less/HomeView.less");
</style>