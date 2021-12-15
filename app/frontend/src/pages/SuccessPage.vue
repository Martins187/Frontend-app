<template>
  <button @click="test">Success</button>
</template>

<script setup>
    import FirstPage from '@/pages/FirstPage.vue'
    
    const emit = defineEmits(['change', 'delete'])

    function test()
    {
        emit("changePage", FirstPage)
    }
</script>