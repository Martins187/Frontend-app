<template>
   
</template>

<script setup>
    import { computed } from 'vue'

    const props = defineProps({
        blockImage: {}
    })

    const blockImage = computed(() => {
        return props.blockImage
    })
  
</script>