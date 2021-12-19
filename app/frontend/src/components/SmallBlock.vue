<template>
   <div
        class="w-105.85px h-105.85px mt-13.23px items-center bg-black rounded-10px flex justify-center items-center sm:mt-4 sm:w-30 sm:h-30 hover:cursor-pointer"
        :class="isSelected ? ['border-5', 'border-green'] : ''">
        <img class="w-20 mb-46px mt-33px sm:w-91px"
            :src="blockImageUrl" 
        />
   </div>
</template>

<script setup>
    import { computed, ref } from 'vue'

    const props = defineProps({
        isSelected: {},
        blockImageUrl: {}
    })

    const blockImageUrl = computed(() => {
        return props.blockImageUrl
    })

    const isSelected = computed(() => {
        return props.isSelected
    })
</script>

