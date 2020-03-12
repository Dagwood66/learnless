<template>
    <div class="escaping">
        <pre>
            任何 ~"anything" 或 ~'anything' 形式的内容都将按原样输出
        </pre>
        点我看效果
    </div>
</template>

<style scoped lang="less">
    .escaping {
        @min768: ~"(min-width: 768px)";
        .element {
            @media @min768 {
                font-size: 1.2rem;
            }
        }
    }
</style>
