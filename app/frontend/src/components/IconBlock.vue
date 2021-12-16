<template>
   <div class="w-159.63px h-159.63px mt-5 bg-yellow-300 items-center flex justify-center rounded-10px sm:w-174.15px sm:h-174.15px">
       blockuhuhuhuhu
   </div>
</template>

<script setup>
    import { computed } from 'vue'

    const props = defineProps({
        blockImage: {}
    })

    const blockImage = computed(() => {
        return props.blockImage
    })
  
</script>