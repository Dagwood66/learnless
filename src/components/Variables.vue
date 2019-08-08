<template>
  <div>
    <a>变量</a>
    <a class="link">变量</a>
    <a class="widget">变量</a>
    <div class="banner">选择器使用变量</div>
    <div class="bannera">选择器使用变量</div>
    <div class="img">字符串中使用变量</div>
    <div class="widget">属性中使用变量</div>
    <div class="div1">变量名定义变量</div>
    <p class="p1">测试1</p>
    <p class="p2">测试2</p>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {}
    }
  }
</script>
<!--
  变量特性
    1. 变量声明无先后顺序
    2. 当前作用域同名变量以最后一次为准
    3. 当前作用域无当前变量,依次向上查找
  变量使用
    1. 属性值中直接使用 @variableName
    2. 属性值为字符串中使用 @{variableName}
    3. 选择器/属性中使用 @{variableName}
    4. 变量赋值中使用 @variableName
-->
<style scoped lang="less">
  @link-color: #428bca;
  @link-color-hover: darken(@link-color, 10%);
  @my-selector: banner;
  @images: "http://h.hiphotos.baidu.com/";
  @property: color;
  @fnord: "I am fnord.";
  @var: "fnord";

  @p1-color: #000;
  @p2-color: "#000";

  .p1 {
    color: @p1-color;
  }

  .p2 {
    color: @p2-color;
  }

  a, .link {
    color: @link-color;
  }

  a:hover {
    color: @link-color-hover;
  }

  .widget {
    color: #fff;
    background: @link-color;
  }

  .@{my-selector} {
    font-weight: bold;
    line-height: 40px;
    margin: 0 auto;
  }

  .@{my-selector}a {
    font-weight: bold;
    line-height: 40px;
    margin: 0 auto;
  }

  .img {
    height: 200px;
    color: #444;
    background: url("@{images}lvpics/w=600/sign=5dc3621e19d5ad6eaaf967eab1c939a3/0b55b319ebc4b745cc71eecccdfc1e178b821506.jpg");
  }


  .widget {
      f@{property}ds: #0ee;
    background-@{property}: #999;
  }

  .div1:before {
    content: @@var;
  }
</style>
