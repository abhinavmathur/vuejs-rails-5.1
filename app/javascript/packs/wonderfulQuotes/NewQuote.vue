<template>
    <div class="row">
        <div class="col-sm-8 offset-sm-2 col-xs-12 col-md-6 offset-md-3 form-group">
            <label>Quote</label>
            <textarea cols="30" rows="3" class="form-control" v-model="quote"></textarea>
        </div>
        <div class="col-sm-8 offset-sm-2 col-xs-12 col-md-6 offset-md-3 form-group">
            <button class="btn btn-primary" @click.prevent="createNewQuote">Add Quote</button>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                quote: ''
            }
        },
        methods: {
            createNewQuote(){
                this.$emit('quoteAdded', this.quote)
                this.quote = ''
            }
        }
    }
</script>