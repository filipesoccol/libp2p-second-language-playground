<template>
    <div style="width:100%; height: 100%;">
        <component :is="station" />
    </div>
</template>

<script>
import Guest from "./Guest"
import Host from "./Host"

export default {
    components: {
        guest: Guest,
        host: Host
    },
    data() {
        return {
            station: false
        }
    },
    mounted(){
        this.station = this.$route.params.room === this.peerId ? 'host' : 'guest'
    }
}
</script>