<template>
    <div class="home">
        <ol>
            <li @click="$router.push('/Variables')">变量（Variables）</li>
            <li @click="$router.push('/mixin')">混合（Mixins）</li>
            <li @click="$router.push('/nesting')">嵌套（Nesting）</li>
            <li @click="$router.push('/operations')">运算（Operations）</li>
            <li @click="$router.push('/escaping')">转义（Escaping）</li>
            <li @click="$router.push('/Functions')">函数（Functions）</li>
            <li @click="$router.push('/Namespace')">命名空间和访问符</li>
            <li @click="$router.push('/')">映射（Maps）3.5</li>
            <li @click="$router.push('/scope')">作用域（Scope）</li>
            <li @click="$router.push('/')">注释（Comments）</li>
            <li @click="$router.push('/')">导入（Importing）</li>
        </ol>
    </div>
</template>

<script>
    export default {}
</script>
