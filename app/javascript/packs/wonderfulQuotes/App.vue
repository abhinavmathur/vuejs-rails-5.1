<template>
    <div class="container">
        <app-progress-bar :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-progress-bar>
        <br>
        <app-new-quote @quoteAdded="newQuote"></app-new-quote>
        <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
        <br>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">Click on a box to delete a quote</div>
            </div>
        </div>
    </div>
</template>

<script>
    import QuoteGrid from './QuoteGrid.vue'
    import NewQuote from './NewQuote.vue'
    import ProgressBar from './ProgressBar.vue'

    export default {
        data: function() {
            return {
                quotes: ['Just a sample quote'],
                maxQuotes: 10
            }
        },
        components: {
            appQuoteGrid: QuoteGrid,
            appNewQuote: NewQuote,
            appProgressBar: ProgressBar
        },
        methods: {
            newQuote(quote) {
                if(this.quotes.length >= this.maxQuotes){
                    alert('Max quotes allowed are 10. Please delete some quotes.')
                } else {
                    this.quotes.push(quote);
                }
            },
            deleteQuote(index) {
                if(confirm('Are you sure?')) {
                    this.quotes.splice(index, 1);
                }
            }
        }
    }
</script>