<template>
   <div
        class="w-105.85px h-105.85px mt-13.23px items-center rounded-10px flex justify-center 
        sm:mt-4 sm:w-30 sm:h-30 hover:cursor-pointer"
        :class="classObject">
    
        <img :src="blockImageUrl" />
   </div>
</template>

<script setup>
    import { computed, ref } from 'vue'

    const props = defineProps({
        isSelected: {},
        blockImageUrl: {},
        background:{}
    })

    const blockImageUrl = computed(() => {
        return props.blockImageUrl
    })

    const isSelected = computed(() => {
        return props.isSelected
    })

    const background = computed(() => {
        return props.background
    })

    const classObject = computed(() => {
        return {
            'border-5': isSelected.value,
            'border-green': isSelected.value,
            'bg-black' : background.value == 'black'
        }
    })
</script>

