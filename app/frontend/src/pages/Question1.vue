<template>
  <button @click="test">Q1</button>
</template>

<script setup>
    import Question2 from '@/pages/Question2.vue'
    
    const emit = defineEmits(['change', 'delete'])

    function test()
    {
        emit("changePage", Question2)
    }
</script>