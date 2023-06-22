<template>
  <div class="bg-slate-700 p-14">
    <div class="grid grid-cols-3 w-80 h-80 mx-auto">
      <Cell v-for="(value, index) in gameStore.values" :key="index" :value="value" />
    </div>
  </div>
</template>

<script>
import Cell from './Cell.vue'
import { useGameStore } from '../stores/gameStore'

export default {
  name: 'board-component',
  setup: () => {
    return {
      gameStore: useGameStore()
    }
  },
  computed: {
    values() {
      return this.gameStore.getItems()
    }
  },
  components: {
    Cell
  }
}
</script>
