<template>
  <button @click="test">Q5</button>
</template>

<script setup>
    import SuccessPage from '@/pages/SuccessPage.vue'
    
    const emit = defineEmits(['change', 'delete'])

    function test()
    {
        emit("changePage", SuccessPage)
    }
</script>