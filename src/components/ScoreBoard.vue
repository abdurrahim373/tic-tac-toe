<template>
  <div class="flex justify-around pt-10 text-white">
    <Score :score="gameStore.playerOne.score" :playerName="'Player 1'" />
    <Score :score="gameStore.playerTwo.score" :playerName="'Player 2'" />
  </div>
</template>

<script>
import { useGameStore } from '../stores/gameStore'
import Score from './Score.vue'

export default {
  name: 'score-board-component',
  setup: () => {
    return {
      gameStore: useGameStore()
    }
  },
  components: {
    Score
  }
}
</script>
