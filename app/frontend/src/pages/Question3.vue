<template>
  <button @click="test">Q3</button>
</template>

<script setup>
    import Question4 from '@/pages/Question4.vue'
    
    const emit = defineEmits(['change', 'delete'])

    function test()
    {
        emit("changePage", Question4)
    }
</script>