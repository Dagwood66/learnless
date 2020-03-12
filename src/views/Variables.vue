<template>
    <div class="variables">
        <pre>
            1. 变量的声明
                @name : variable;
            2. 变量的使用
        </pre>
        <div class="text-1">点我看效果</div>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped lang="less">
    @width: 100px;
    @height: @width + 10px;

    .variables {

        .text-1 {
            width: @width;
            height: @height;
        }
    }
</style>
