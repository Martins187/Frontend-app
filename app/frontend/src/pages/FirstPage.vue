<template>
    <div>
        <div class="mt-11">
            <Heading :headerText="headerText" />
        </div>
        <div class="flex justify-center mt-12">
            <div class="w-342.95px bg-green-200 flex flex-wrap justify-between sm:w-562.45px ">
                <icon-block />
                <icon-block />
                <icon-block />
                <icon-block />
                <icon-block />
                <icon-block />
            </div>
        </div>
       
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import Question1 from '@/pages/Question1.vue'
    import Heading from '@/components/Heading.vue'
    import IconBlock from '@/components/IconBlock.vue'

    const emit = defineEmits(['change', 'delete'])
    const headerText = 'pick any category, complete quiz & earn casino prize'

    function changePage()
    {
        emit("changePage", Question1)
    }
</script>