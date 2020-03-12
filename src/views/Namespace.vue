<template>
    <div class="namespace">
        <pre>
            混合（mixins）进行分组
            如果不希望混合出现在输出的 CSS 中，例如 #bundle .tab，将 () 附加到命名空间（例如 #bundle()）后面。
        </pre>
        <button>点我看效果</button>
    </div>
</template>

<style scoped lang="less">
    #bundle() {
        .button {
            display: block;
            border: 1px solid black;
            background-color: grey;

            &:hover {
                background-color: white;
            }
        }
        .tab {

        }
        .citation {

        }
    }


    .namespace {
        #bundle.button();
    }
</style>
