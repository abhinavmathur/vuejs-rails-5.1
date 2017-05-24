<template>
    <div class="container">
        <hr>
        <div class="row">
            <servers></servers>
            <server-details></server-details>
        </div>
    </div>
</template>

<script>
    import Servers from './Servers.vue'
    import ServerDetails from './ServerDetails.vue'

    export default {
        components: {
            'servers': Servers,
            'server-details': ServerDetails
        }
    }
</script>