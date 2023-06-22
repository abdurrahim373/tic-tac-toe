<template>
    <div class="text-center">
        <h1 class="text-6xl font-bold">{{ score }}</h1>
        <h2 class="text-lg font-medium uppercase">{{ playerName }}</h2>
    </div>
</template>

<script>
export default {
    name: 'score-component',
    props: ['score', 'playerName']
}
</script>
