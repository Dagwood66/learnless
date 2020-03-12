<template>
    <div class="nesting">
        <div class="text-1">
            点我看效果
        </div>
    </div>
</template>

<style scoped lang="less">
    .nesting {
        .text-1 {
            color: red;
        }
    }

    .clearfix {
        display: block;
        zoom: 1;

        &:after {
            content: " ";
            display: block;
            font-size: 0;
            height: 0;
            clear: both;
            visibility: hidden;
        }
    }

    /* @规则嵌套 */
    .component {
        width: 300px;

        @media (min-width: 768px) {
            width: 600px;

            @media (min-resolution: 192dpi) {
                width: 700px;
            }
        }

        @media (min-width: 1280px) {
            width: 800px;
        }
    }
</style>
