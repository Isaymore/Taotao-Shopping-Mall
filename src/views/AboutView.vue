<template>
  <div class="about">
    <h3>{{ text }}</h3>
    <h3 v-text="text1"></h3>
    <h3>{{ text2 }}</h3>
    <h3 v-html="text2" idtest="arrId" v-bind:h3id="arrId" :idd="arrId"></h3>
    <!-- 绑定类名 -->
    <h3 class="bgc" :class="{ red: isRed, big: isBig }">绑定类名</h3>
    <!-- 区分商品类型 -->
    <h3 v-if="goodsType === '01'">实物</h3>
    <h3 v-else-if="goodsType === '02'">卡券</h3>
    <h3 v-else>实物</h3>
    <h2 v-show="showPrice">￥100元</h2>
    <p v-show="showDesc">商品详情</p>
    <hr />
    <!-- 商品列表 -->
    <h1>商品列表页</h1>
    <ul>
      <li v-for="(item, index) in goodsList" :key="index">
        <h3>商品标题：{{ item.goodsName }}</h3>
        <span>商品价格：{{ item.goodsPrice }}</span>
        <p v-show="item.goodsDesc">商品详情：{{ item.goodsDesc }}</p>
        <hr />
      </li>
    </ul>
    <van-button type="success" @click="onClick">点我</van-button>
    <br />
    <input type="text" v-model="searchText" />
    <h3>{{ searchText }}</h3>
    v-model内部的实现原理：<input
      type="text"
      :value="searchText1"
      @input="onInput1"
    />
    <input
      type="text"
      v-model="searchText1"
      @input="onInput"
      @change="onChange"
      @focus="onFocus"
      @blur="onBlur"
    />
  </div>
</template>
<script lang="ts">
// 定义接口，用来声明对象属性的类型
interface IGoods {
  goodsName: string;
  goodsPrice: number;
  goodsDesc?: string;
}
// vue-class-component  vue的类组件写法
import { Vue } from "vue-class-component";
import { useRouter, useRoute } from "vue-router";
export default class AboutView extends Vue {
  text: string = "Hi";
  text1: string = "我是星爷小迷弟";
  text2: string = '<em style="color: red">星爷yyds</em>';
  arrId: number = 666;
  isRed: boolean = true;
  isBig: boolean = false;
  goodsType: string = "01"; // 01-实物 02-卡券 03-积分
  showPrice: boolean = false;
  showDesc: boolean = true;
  // 用接口IGoods表示数组
  goodsList: IGoods[] = [
    {
      goodsName: "空军一号",
      goodsPrice: 749,
      goodsDesc: "经典小白鞋",
    },
    {
      goodsName: "斯凯奇绿色背包",
      goodsPrice: 99,
      goodsDesc: "绿色小清新",
    },
    {
      goodsName: "MacBook",
      goodsPrice: 14999,
      goodsDesc: "高颜值流畅",
    },
    {
      goodsName: "iPhone 14 Pro",
      goodsPrice: 12999,
    },
    {
      goodsName: "回力拖鞋",
      goodsPrice: 30,
      goodsDesc: "舒服",
    },
  ];
  searchText: string = "";
  searchText1: string = "";
  route = useRoute();
  public created():void {
    console.log('AboutView组件的created');
    console.log("route", this.route, typeof this.route);
    console.log('query参数',this.route.query,typeof this.route.query);
    console.log('query参数',this.route.query.id,typeof this.route.query.id);
    console.log('params参数',this.route.params,typeof this.route.params);
    console.log('params参数',this.route.params.id,typeof this.route.params.id);
    console.log(location.href);
    console.log(location.search);
    console.log(location.hash);
  }
  onClick(): void {
    alert("好好学习，天天向上~");
  }
  // eslint-disable-next-line
  onInput1(e: any): void {
    this.searchText1 = e.target.value;
    console.log("onInput", this.searchText1);
  }
  onInput(): void {
    console.log("onInput", this.searchText1);
  }
  onChange(): void {
    console.log("onChange", this.searchText1);
  }
  onFocus(): void {
    console.log("onFocus", this.searchText1);
  }
  onBlur(): void {
    console.log("onBlur", this.searchText1);
  }
}
</script>
<style lang="less" scoped>
@import url("~@/assets/less/AboutView.less");
</style>