<template>
    <div class="mixin">
        点我看效果
    </div>
</template>

<style scoped lang="less">
    .red {
        color: red;
    }

    .mixin {
        background-color: green;
        .red();
    }
</style>
