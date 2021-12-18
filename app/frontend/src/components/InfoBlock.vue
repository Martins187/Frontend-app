<template>
    <div class="flex justify-center items-center w-25 h-12 border-1 
        border-solid border-yellow rounded-10px">
        <div class="max-w-342.95px text-center text-15 text-yellow 
            font-fredokaOne uppercase sm:text-18 sm:max-w-458px">
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