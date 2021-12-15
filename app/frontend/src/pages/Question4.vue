<template>
  <button @click="test">Q4</button>
</template>

<script setup>
    import Question5 from '@/pages/Question5.vue'
    
    const emit = defineEmits(['change', 'delete'])

    function test()
    {
        emit("changePage", Question5)
    }
</script>