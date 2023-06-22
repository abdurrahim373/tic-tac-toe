<template>
  <Board />

  <div class="bg-gradient-to-b from-slate-700 from-20% to-transparent">
    <div class="flex justify-center">
      <Button class="mr-4" @onClick="resetGame">Reset Game</Button>
      <Button @onClick="restart">Restart</Button>
    </div>

    
    <ScoreBoard />
    
  </div>
  
  <div v-if="gameStore.message.length > 0" class="fixed top-0 w-full p-8 
    bg-gradient-to-tr from-violet-600 to-black border-b-4 border-slate-100">
    <h1 class="text-white text-5xl font-extrabold text-center">{{ gameStore.message }}</h1>
  </div>
</template>
    
<script>
import Board from './Board.vue'
import ScoreBoard from './ScoreBoard.vue'
import Button from './Button.vue'
import { useGameStore } from '../stores/gameStore'

export default {
  name: 'board-component',
  setup: () => {
    return {
      gameStore: useGameStore(),
    }
  },
  computed: {
    values() {
      return this.gameStore.getItems();
    }
  },
  components: {
    Board, Button, ScoreBoard
  },
  methods: {
    resetGame() {
      this.gameStore.resetGame()
    },
    restart() {
      this.gameStore.resetBoard()
    }
  }
}
</script>
    