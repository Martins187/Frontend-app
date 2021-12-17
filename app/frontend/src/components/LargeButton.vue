<template>
    <div class="flex justify-center">
        <button 
            :disabled="!isEnabled"
            @click="emit('buttonAction')">
            <div 
                class="w-345px h-75px flex justify-center items-center font-fredokaOne 
                text-white text-25 rounded-10px bg-gradient-to-b from-light-green 
                to-darker-green sm:w-25 sm:h-90px sm:text-30 hover:cursor-pointer"
                :class="[ isEnabled ? ['bg-gradient-to-b', 'from-victory-green-light', 
                'to-victory-green-darker']: '']">
                {{ buttonText }}
            </div>
        </button>
    </div>
</template>

<script setup>
    import { computed, ref } from 'vue'

    const emit = defineEmits(['change', 'delete'])

    const props = defineProps({
        buttonText: {},
        isEnabled: {}
    })

    const buttonText = computed(() => {
        return props.buttonText
    })

    const isEnabled = computed(() => {
        return props.isEnabled
    })
  
</script>