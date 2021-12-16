<template>
   <div 
        @click="isSelected = !isSelected"
        class="w-159.63px h-159.63px mt-5 items-center bg-gradient-to-b from-bluish to-bluish-grey
        border-solid border-1 border-white rounded-10px sm:w-174.15px sm:h-174.15px"
        :class="[ isSelected ? ['bg-gradient-to-b', 'from-yellow', 
        'to-dark-yellow', 'border-yellow']: '']">
        <img class="w-156.75px mt-15.58pxNeg mb-8.25px 
                sm:w-171px sm:mt-17pxNeg sm:mb-9px" 
                :src="blockImageUrl" 
            />

        <div class="flex justify-center font-fredokaOne 
            text-16 text-dark-grey sm:text-18">
            {{ blockText }}
        </div>
   </div>
</template>

<script setup>
    import { computed, ref } from 'vue'

    let isSelected = ref(false)

    const props = defineProps({
        blockImageUrl: {},
        blockText: {}
    })

    const blockImageUrl = computed(() => {
        return props.blockImageUrl
    })

    const blockText = computed(() => {
        return props.blockText
    })
  
</script>

