<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>Name: {{ switchName() }}</p>
        <p>Age: {{ userAge }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFunction()">Reset Via Function</button>
    </div>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                required: true,
                default: 'Abhinav'
            },
            resetFunction: Function,
            userAge: Number
        },
        methods: {
            switchName(){
                return this.name.split('').reverse().join('');
            },
            resetName(){
                this.name = 'Abhinav';
                this.$emit('nameWasReset', this.name)
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
