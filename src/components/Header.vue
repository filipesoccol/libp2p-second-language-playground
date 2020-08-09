<template>
    <div class="peer-header">
        <div>Your ID: {{ peerId }}</div>
        <div class="peer-nick">
        </div>
    </div>
</template>

<script>
export default {
    name: 'peer-name',
    data() {
        return {
            nickname: ''
        }
    },
    methods: {
        setNickname() {
            console.log(this.nickname)
        }
    }
}
</script>

<style>
.peer-nick {
    padding: 8px 0px;
    display: flex;
}
.peer-input {
    border: none;
}
.peer-header {
    display: grid;
    justify-content: start;
    padding: 10px;
    top: 10px;
    left: 10px;
    font-size: 0.75rem;
}
</style>