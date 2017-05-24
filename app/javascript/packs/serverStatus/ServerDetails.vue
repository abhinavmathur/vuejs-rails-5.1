<template>
    <div class="col-sm-6">
        <p v-if="!server">Please select a server</p>
        <p v-else>Server #{{ server.id}} selected, Status: {{ server.status }}</p>
        <hr>
        <button @click="resetStatus">Reset to Normal</button>
    </div>
</template>

<script>
    import { serverBus } from './servers';

    export default {
        data(){
            return {
                server: null
            }
        },
        created() {
            serverBus.$on('serverSelected', (server) => {
                this.server = server
            })
        },
        methods: {
            resetStatus() {
                this.server.status = 'Normal'
            }
        }
    }
</script>