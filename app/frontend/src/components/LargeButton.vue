<template>
    <div 
        @click="isClicked = !isClicked"
        class="flex justify-center">
        <div 
            class="w-345px h-75px flex justify-center items-center font-fredokaOne 
          text-white text-25 rounded-10px bg-gradient-to-b from-light-green 
          to-darker-green sm:w-25 sm:h-90px sm:text-30 hover:cursor-pointer"
            :class="[ isClicked ? ['bg-gradient-to-b', 'from-victory-green-light', 
            'to-victory-green-darker']: '']">
            {{ buttonText }}
        </div>
    </div>
</template>

<script setup>
    import { computed, ref } from 'vue'

    let isClicked = ref(false)

    const props = defineProps({
        buttonText: {}
    })

    const buttonText = computed(() => {
        return props.buttonText
    })
  
</script>