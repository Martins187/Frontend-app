<template>
   <div 
        class="w-159.63px h-159.63px mt-5 items-center 
        bg-gradient-to-b from-bluish to-bluish-grey 
        border-solid border-1 border-white rounded-10px 
        sm:w-174.15px sm:h-174.15px 
        hover:cursor-pointer"
        :class="classObject">
        <img class="w-156.75px mt-15.58pxNeg mb-8.25px 
            sm:w-171px sm:mt-17pxNeg sm:mb-9px" 
            :src="blockImageUrl" 
        />

        <div class="text-16 text-dark-grey font-fredokaOne
            flex justify-center 
            sm:text-18">
            {{ blockText }}
        </div>
   </div>
</template>

<script setup>
    import { computed, ref } from 'vue'

    const props = defineProps({
        blockImageUrl: {},
        blockText: {},
        selectedBlockName: {}
    })

    const classObject = computed(() => {
        return {

            'bg-gradient-to-b \
            from-yellow \
            to-dark-yellow \
            border-yellow' : selectedBlockName.value ==  blockText.value,
        }
    })

    const blockImageUrl = computed(() => {
        return props.blockImageUrl
    })

    const blockText = computed(() => {
        return props.blockText
    })

    const selectedBlockName = computed(() => {
        return props.selectedBlockName
    })
  
</script>

