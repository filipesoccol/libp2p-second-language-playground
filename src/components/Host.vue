<template>
    <div>
        <div v-if="step === 0">
            <textarea v-model="words" rows="6" cols="40" placeholder="Type words separated by space"></textarea>
            <p>Total Words: {{ wordsList.length }}</p>
            <p>Quantity: <input v-model="quantity" type="number" /></p>
            <button @click="startGame">Start Game</button>
        </div>
        <div v-else class="view-board">
            <div class="view-words">
                <button @click="draftWord">Draft Word</button>
                <p v-for="(w,idx) in drafted" :key="idx" class="drafted-words">{{idx+1}} - {{ w }}</p>
                <p v-for="(w,idx) in wordsList" :key="idx+w" class="available-words">{{ w }}</p>
            </div>
            <div class="view-players">
                <div v-for="(p,idx) in players" :key="idx" class="player-holder">
                    <span class="player-name">{{ p.name }}</span>
                    <span
                        v-for="(w,widx) in p.words"
                        :key="widx"
                        :class="{'available-words':p.scored.includes(widx), 'player-word':true}"
                    >
                        {{ w }} 
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            step: 0,
            words: '',
            quantity: 9,
            wordsList: [],
            drafted: [],
            players: [
                // {peer: 'QMqweer...', name: 'Filipe', words:['asd','asd','asd','asd','asd','asd','asd'], scored:[1,2,3]},
            ]
        }
    },
    mounted() {
        this.host = this.$route.params.room
        if (this.host !== this.peerId) return;
        var enc = new TextDecoder();
        this.libp2p.pubsub.subscribe(this.peerId, (msg) => {
            if (msg.from == this.peerId) return
            this.receivedMessage(msg.from, enc.decode(msg.data))
        })
        setInterval( () => {
            this.sendPing()
        }, 2000)
    },
    watch: {
        words() {
            this.wordsList = this.words.trim().split(' ')
        }
    },
    methods: {
        startGame() {
            this.step = 1
        },
        sendPing() {
            let msg = {type: 'ping', message: this.step}
            this.libp2p.pubsub.publish(this.peerId, JSON.stringify(msg))
        },
        sendWords() {
            let msg = {type: 'words', message: this.wordsList}
            this.libp2p.pubsub.publish(this.peerId, JSON.stringify(msg))
            msg = {type: 'quantity', message: this.quantity}
            this.libp2p.pubsub.publish(this.peerId, JSON.stringify(msg))
        },
        sendPlayer(player) {
            let msg = {type: 'player', message: player}
            this.libp2p.pubsub.publish(this.peerId, JSON.stringify(msg))
        },
        draftWord() {
            this.step = 2
            const drafted = Math.random() * this.wordsList.length
            this.drafted = this.drafted.concat(this.wordsList.splice(drafted, 1));
        },
        receivedMessage(peer, msg) {
            try {
                const {type, message} = JSON.parse(msg);
                switch (type) {
                    case 'join': {
                        const player = this.players.find(p => p.peer === peer || p.name == message)
                        if (!player) this.players.push({ peer: peer, name: message, words:[], scored:[] })
                        else {
                            player.peer = peer
                            this.sendPlayer(player)
                        }
                        this.sendWords()
                    } break
                    case 'chosen': {
                        this.players.find( p => p.peer === peer).words = message
                    } break
                    case 'scored': {
                        this.players.find( p => p.peer === peer).scored = message
                    } break
                }
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>

<style scoped>
.view-board {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.view-words {
    min-width: 100px;
}
.view-players {
    display: grid;
    width: 800px;
    padding: 0px 8px;
}
.player-holder {
    display: flex;
    flex-wrap: wrap;
    border: #84fab0 3px solid;
    border-radius: 8px;
    margin: 4px;
}
.player-name {
    width: 100%;
    border-bottom: #84fab0 1px solid;
    background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
}
.player-word {
    width: auto;
    padding: 4px 8px;
    margin: 2px;
}
.available-words {
    font-weight: bold;
    margin: 2px;
}
.drafted-words {
    font-weight: normal;
    margin: 2px;
}
</style>