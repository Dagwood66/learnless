<template>
    <div class="scope">
        <pre>
            首先在本地查找变量和混合（mixins），
            如果找不到，则从“父”级作用域继承。
        </pre>
        <div class="a">
            <div class="b">
                点我看效果
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
    @var: red;

    .scope {
        .a {
            @var: green;

            .b {
                color: @var; // white
            }
        }
    }
</style>
