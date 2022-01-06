<template>
    <input 
        class="appearance-none h-4 slider-thumb w-520px rounded-10px 
        bg-gradient-to-r from-bluish-grey2 to-light-bluish-grey2"
        type="range" 
        min="1" 
        max="100" 
        v-model="sliderAmount" 
    >
</template>

<style>
    input[type=range]::-webkit-slider-thumb {
        pointer-events: all;
        border-radius: 50%;
        width: 2.5rem;
        height: 2.5rem;
        background: radial-gradient(81.71% 81.71% at 40.24% 48.78%, #FFBB00 0%, #F3B200 100%);
        box-shadow: 0px 0px 14px 2px rgba(0, 0, 0, 0.2);
        -webkit-appearance: none;
    }
</style>

<script setup>
    import { computed, ref, watchEffect, watch } from 'vue'

    const emit = defineEmits(['change', 'delete'])
    const props = defineProps({
        chosenAmount: {},
    })

    const chosenAmount = computed(() => {
        return props.chosenAmount
    })

    let sliderAmount = ref('')

    watchEffect(() => {
        emit("changeAmount", sliderAmount.value)
    })

    watchEffect(() => {
        sliderAmount.value = chosenAmount.value
    })
</script>