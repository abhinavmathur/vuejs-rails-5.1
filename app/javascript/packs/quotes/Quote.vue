<template>
    <div>
        <div class="title">
            <slot name="title"></slot>
        </div>
        <hr>
        <div class="content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    div {
        border: 1px solid #CCCCCC;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
    }
</style>