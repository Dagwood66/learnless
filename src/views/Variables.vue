<template>
    <div class="variables">
        <pre>
            1. 变量的声明
                @name : variable;
            2. 变量的使用
                属性,选择器名称，属性名称，URL,@import 都可以使用
            3. 属性作为变量(3.0.0)
                $name
        </pre>
        <div class="link">点我看效果</div>
        <div class="widget">点我看效果</div>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped lang="less">
    @link-color: #428bca;

    a, .link {
        color: @link-color;
    }

    .widget {
        color: #fff;
        background: @link-color;
    }

    // Variables
    @my-selector: banner;
    // Usage
    .@{my-selector} {
        font-weight: bold;
        line-height: 40px;
        margin: 0 auto;
    }

    // 选择器使用变量(进阶)
    @base: ".test-";
    @my-selector: "@{base}banner";

    @{my-selector} {
        font-weight: bold;
        line-height: 40px;
        margin: 0 auto;
    }

    // Variables
    @images: "../img";
    @images: "110";

    // Usage
    body {
        color: #444;
        /*background: url("@{images}/white-sand.png");*/
        background-color: "#@{images}210";
    }

    @property: color;

    .widget {
            @{property}: #0ee;
        background-@{property}: #999;
    }

    @primary: green;
    @secondary: blue;

    .section {
        @color: primary;

        .element {
            color: @@color; // 可变变量
        }
    }

    .widget {
        color: #efefef;
        background-color: $color;
    }
</style>
