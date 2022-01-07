<template>
    <div class="h-60px w-60px flex justify-center items-center mx-1
        text-bluish-grey2 uppercase text-14 font-fredokaOne 
        border-solid border-1 border-white rounded-circle
        bg-gradient-to-b from-bluish to-bluish-grey
        sm:mx-4"
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