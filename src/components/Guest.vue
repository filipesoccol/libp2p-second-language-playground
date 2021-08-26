<template>
    <div v-if="connected" class="view-board">
        <div class="view-words">
            <p v-for="(w,idx) in wordsHost" :key="idx+w" class="available-words">{{ w }}</p>
        </div>
        <div class="view-guest">
            <div style="width: 100%">
                <input v-model="nickname" placeholder="Choose your name"/>
                <button @click="selectName">Select Name</button>
            </div>
            <button
                v-for="(word, idx) in wordsList"
                :key="idx"
                :class="{'chosen-word':true, 'red':scored.includes(idx)}"
                tabindex="-1"
                @click="scoreWord(idx)"
            >
                <input
                    v-if="step < 2"
                    v-model="wordsList[idx]"
                    placeholder="Type a word"
                    class="word-input"
                    @blur="chosenWords()"
                />
                <span v-else>{{ wordsList[idx] }}</span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            connected: false,
            step: 0,
            host: '',
            isLocked: false,
            nickname: '',
            wordsHost: [],
            wordsList: [],
            chosen: [],
            scored: []
        }
    },
    mounted() {
        this.host = this.$route.params.room
        if (this.host === this.peerId) return;
        var enc = new TextDecoder();
        this.libp2p.pubsub.subscribe(this.host, (msg) => {
            if (msg.from == this.peerId) return
            console.log('RECEIVED', msg.data)
            this.receivedMessage(msg.from, enc.decode(msg.data))
        })
    },
    methods: {
        selectName() {
            const msg = { type:'join', message:this.nickname }
            this.libp2p.pubsub.publish(this.host, JSON.stringify(msg))
        },
        addWord() {
            this.wordsList.push('')
        },
        chosenWords() {
            const msg = { type:'chosen', message:this.wordsList }
            this.libp2p.pubsub.publish(this.host, JSON.stringify(msg))
        },
        scoreWord(index) {
            if (this.step < 2) return
            const position = this.scored.findIndex( w => w === index)
            if (position >= 0)
                this.scored.splice(position, 1)
            else 
                this.scored.push(index)
            this.scoredWord()
        },
        scoredWord() {
            const msg = { type:'scored', message:this.scored }
            this.libp2p.pubsub.publish(this.host, JSON.stringify(msg))
        },
        receivedMessage(peer, msg) {
            try {
                console.log(peer, msg)
                const {type, message} = JSON.parse(msg);
                // If not the host ignore
                // if (peer !== this.host) return;
                switch (type) {
                    case 'ping':
                        this.connected = true
                        this.step = message
                    break
                    case 'words':
                        this.wordsHost = message
                    break
                    case 'quantity':
                        if (this.wordsList.length !== message)
                        this.wordsList = new Array(message)
                    break
                    case 'player':
                        //console.log('PASSOU!!!!', this.nickname, message.words, this.nickname === message.name)
                        if (this.peerId === message.peer || this.nickname === message.name) {
                            this.nickname = message.name
                            this.wordsList = message.words
                            this.scored = message.scored
                        }
                    break
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
    width:100%;
    height: 100%;
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}
.view-words {
    width: 30%;
}
.view-players {
    display: grid;
    width: 800px;
    padding: 0px 8px;
}
.view-guest {
    width:70%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-evenly;
}
.player-holder {
    display: flex;
    flex-wrap: wrap;
    border: #84fab0 3px solid;
    border-radius: 8px;
    margin: 4px;
}
.chosen-word {
    width: 140px;
    height: 140px;
}
.chosen-word.red {
    background-image: linear-gradient( 135deg, #FEB692 0%, #EA5455 100%);
    border: none;
}
.word-input {
    background: none;
    border: none;
    width: 90%;
    text-align: center;
    font-size: 14px;
    font-family: inherit;
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