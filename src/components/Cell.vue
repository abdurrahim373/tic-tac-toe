<template>
  <div
    @click="onClick"
    class="flex justify-center items-center border-2 border-solid border-slate-300 h-24 w-24 font-extrabold rounded-md text-5xl text-white hover:bg-slate-600"
  >
    {{ content }}
  </div>
</template>

<script>
import { useGameStore } from '../stores/gameStore'

export default {
  name: 'cell-component',
  setup: () => {
    return {
      gameStore: useGameStore()
    }
  },
  props: ['value'],
  computed: {
    content() {
      return this.gameStore.getContent(this.value)
    }
  },
  methods: {
    onClick() {
      if (this.value.player === 0) {
        this.content = this.gameStore.isPlayerOneActive ? 'X' : 'O'
        this.selected = true
        this.gameStore.selectCell(this.value)
      }
    }
  }
}
</script>
