<template>
    <div class="h-60px w-60px rounded-circle text-14 font-fredokaOne 
        text-bluish-grey2 flex justify-center uppercase items-center 
        bg-gradient-to-b from-bluish to-bluish-grey mx-4
        border-solid border-1 border-white"
        :class="classObject">
        {{ buttonText }}
    </div>
</template>

<script setup>
    import { computed, ref } from 'vue'

    const props = defineProps({
        buttonText: {},
        isSelected: {}
    })

    const buttonText = computed(() => {
        return props.buttonText
    })

    const isSelected = computed(() => {
        return props.isSelected
    })

    const classObject = computed(() => {
        return {
            'bg-gradient-to-b': isSelected.value,
            'from-bluish-white': isSelected.value,
            'to-white' : isSelected.value
        }
    })
</script>