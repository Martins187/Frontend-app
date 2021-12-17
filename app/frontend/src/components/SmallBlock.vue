<template>
   <div 
        @click="isSelected = !isSelected"
        class="w-105.85 h-105.85 mt-13.23px items-center bg-black border-solid 
        border-1 rounded-10px sm:mt-0.938 hover:cursor-pointer">
            gygy
        <div class="flex justify-center font-fredokaOne 
            text-16 text-dark-grey sm:text-18">
            {{ blockText }}
        </div>
   </div>
</template>

<script setup>
    import { computed, ref } from 'vue'

    // const props = defineProps({
    //     blockImageUrl: {},
    //     blockText: {},
    //     selectedBlockName: {}
    // })

    // const blockImageUrl = computed(() => {
    //     return props.blockImageUrl
    // })

    // const blockText = computed(() => {
    //     return props.blockText
    // })

    // const selectedBlockName = computed(() => {
    //     return props.selectedBlockName
    // })
  
</script>

