<template>
    <div class="functions">
        <pre>
        </pre>
        点我看效果
    </div>
</template>

<style scoped lang="less">
    @base: #f04615;
    @width: 0.5;

    .functions {
        width: percentage(@width); // returns `50%`
        color: saturate(@base, 5%);
        background-color: spin(lighten(@base, 25%), 8);
    }
</style>
