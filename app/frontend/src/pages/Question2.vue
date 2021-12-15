<template>
  <button @click="test">Q2</button>
</template>

<script setup>
    import Question3 from '@/pages/Question3.vue'
    
    const emit = defineEmits(['change', 'delete'])

    function test()
    {
        emit("changePage", Question3)
    }
</script>