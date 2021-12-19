<template>
    <div class="flex justify-center items-center w-22 h-12 border-1 
        border-solid border-yellow rounded-10px sm:w-25">
        <div class="w-34 text-center text-15 text-yellow 
            font-fredokaOne uppercase sm:text-18 sm:w-25">
            {{ infoText }}
        </div>
    </div>
</template>

<script setup>
    import { computed } from 'vue'

    const props = defineProps({
        infoText: {}
    })

    const infoText = computed(() => {
        return props.infoText
    })
  
</script>