<template>
    <button class="p-2 
    border-2 border-solid border-white rounded-md w-40 
    text-white font-semibold uppercase
    hover:bg-white hover:text-black
    " @click="onClick" ><slot/></button>
</template>

<script>

export default {
    name: 'button-component',
    props: ['name'],
    methods: {
        onClick(event) {
            this.$emit('onClick', event);
        }
    }
}
</script>
