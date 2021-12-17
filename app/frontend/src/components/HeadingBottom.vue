<template>
    <div class="flex justify-center">
        <div class="max-w-342.95px text-center text-15 text-light-blue font-fredokaOne sm:text-18 sm:max-w-458px">
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