<template>
    <div class="flex justify-center">
        <div 
            class="text-center text-30 text-white font-fredokaOne uppercase 
            max-w-858px 
            sm:text-44">
            {{ headerText }}
        </div>
    </div>
</template>

<script setup>
    import { computed } from 'vue'

    const props = defineProps({
        headerText: {}
    })

    const headerText = computed(() => {
        return props.headerText
    })
  
</script>