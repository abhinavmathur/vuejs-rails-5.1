<template>
    <div>
        <div id="on"
             @click="getSelected(true)"
             :class="{active: value}"
        >On</div>
        <div id="off"
             @click="getSelected(false)"
             :class="{active: !value}"
        >Off</div>
        {{ value }}
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        props: ['value'],
        methods: {
            getSelected(value){
                this.$emit('selected_value', value);
            }
        }

    }
</script>

<style scoped>
    .active {
        background-color: green !important;
    }

    #on, #off {
        width: 40px;
        height: 20px;
        background-color: lightgray;
        padding: 2px;
        display: inline-block;
        margin: 10px -2px;
        box-sizing: content-box;
        cursor: pointer;
        text-align: center;
    }

    #on:hover, #on:active {
        background-color: lightgreen;
    }

    #off:hover, #off:active {
        background-color: lightcoral;
    }
</style>