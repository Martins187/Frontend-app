<template>
    <div class="flex justify-center">
        <div class="text-center text-15 text-light-blue font-fredokaOne
            sm:max-w-458px sm:text-18
            max-w-858px">
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