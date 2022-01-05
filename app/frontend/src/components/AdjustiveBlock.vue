<template>
   <div
        class="h-81.22px mt-0.938 mx-2 bg-gradient-to-b from-bluish to-bluish-grey text-dark-grey
        text-10 font-fredokaOne uppercase items-center rounded-10px flex justify-center border-solid border-1 
        border-white sm:h-60px sm:mt-4 sm:mr-4 sm:text-24 sm:mx-0 hover:cursor-pointer"
        :class="classObject">
        <div class="mx-5 sm:mx-10">
            {{ blockText }}
        </div>
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

    const blockText = computed(() => {
        return props.blockText
    })

    const classObject = computed(() => {
        return {
            'bg-gradient-to-b': isSelected.value,
            'from-yellow': isSelected.value,
            'to-dark-yellow' : isSelected.value,
            'border-yellow' : isSelected.value,
        }
    })
</script>

