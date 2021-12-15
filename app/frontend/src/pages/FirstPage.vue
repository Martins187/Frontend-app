<template>
    <div class="mt-11">
        <Heading :headerText="headerText" />
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import Question1 from '@/pages/Question1.vue'
    import Heading from '@/components/Heading.vue'

    const emit = defineEmits(['change', 'delete'])
    const headerText = 'pick any category, complete quiz & earn casino prize'

    function changePage()
    {
        emit("changePage", Question1)
    }
</script>