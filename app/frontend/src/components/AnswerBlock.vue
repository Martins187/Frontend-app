<template>
   <div
        class="w-25 h-81.22px mt-0.938 bg-gradient-to-b from-bluish to-bluish-grey text-dark-grey
        text-24 font-fredokaOne uppercase items-center rounded-10px flex justify-center border-solid border-1 
        border-white sm:w-345px sm:h-70px sm:mt-12.97px sm:text-20 hover:cursor-pointer"
        :class="classObject">
            {{ blockText }}
   </div>
</template>

<script setup>
    import { computed, ref } from 'vue'

    const props = defineProps({
        isSelected: {},
        isCorrect: {},
        blockText:{}
    })

    const isSelected = computed(() => {
        return props.isSelected
    })

    const isCorrect = computed(() => {
        return props.isCorrect
    })

    const blockText = computed(() => {
        return props.blockText
    })

    const classObject = computed(() => {
        return {
            'bg-gradient-to-b': isSelected.value && isCorrect.value,
            'from-yellow': isSelected.value && isCorrect.value,
            'to-dark-yellow' : isSelected.value && isCorrect.value,
            'border-yellow' : isSelected.value && isCorrect.value,
            'bg-gradient-to-b': isSelected.value && !isCorrect.value,
            'from-red': isSelected.value && !isCorrect.value,
            'to-red': isSelected.value && !isCorrect.value,
            'border-pink': isSelected.value && !isCorrect.value,
        }
    })
</script>

