<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <button @click="selectedComponent = 'appQuote'">Quote</button>
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                <button @click="selectedComponent = 'appNew'">New</button>
                <hr>
                {{ selectedComponent }}
                <keep-alive>
                    <component :is="selectedComponent">
                        <p>Default content</p>
                    </component>
                </keep-alive>
              <!--  <app-quote>
                    <h2 slot="title">The Quote</h2>
                    <p slot="content">A wonderful quote</p>
                </app-quote>-->
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './Quote.vue'
    import Author from './Author.vue'
    import New from './New.vue'

    export default {
        data(){
            return {
                selectedComponent: 'appQuote'
            }
        },
        components: {
            'appQuote': Quote,
            'appAuthor': Author,
            'appNew': New
        }
    }
</script>