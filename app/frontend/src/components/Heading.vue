<template>
    <div class="flex justify-center">
        <div class="max-w-43 text-center text-30 text-white 
            font-fredokaOne uppercase sm:text-44">
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