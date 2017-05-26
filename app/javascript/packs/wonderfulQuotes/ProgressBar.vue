<template>
    <div>
        <h3>Quotes Added</h3>
        <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
            :style="{ width: (quoteCount / maxQuotes) * 100 + '%'}">
            {{ formatCount }} / {{ maxQuotes }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['quoteCount', 'maxQuotes'],
        computed: {
            formatCount(){
                if(this.qouteCount === 0){
                    this.quoteCount = ''
                    this.maxQuotes = ''
                } else {
                    return this.quoteCount
                }
            }
        },
    }
</script>