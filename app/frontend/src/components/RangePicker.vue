<template>
    <div>
        <div class="flex justify-center mt-21px uppercase text-18 text-white font-fredokaOne">
            Deposit Limit Per month
        </div>

        <div class="flex justify-center mt-21px h-60px items-center">
            <rounded-button
                :isSelected="selectedLimit == 'max'"
                @click="selectedLimit = 'max'"
                :buttonText="'max'"
            />

            <Slider 
                @changeAmount="changeValue"
                :chosenAmount="chosenAmount"
            />

            <rounded-button
                :isSelected="selectedLimit == 'min'"
                @click="selectedLimit = 'min'"
                :buttonText="'min'"
            />
        </div>

        <div class="flex justify-center">
            <input type="text" v-model="chosenAmount">
            <!-- <dropdown /> -->
        </div>

        <div class="flex justify-center">
            <!--payment methods -->
        </div>
    </div>
</template>

<script setup>
    import { computed, ref } from 'vue'

    import Slider from '@/components/Slider.vue'
    import RoundedButton from '@/components/RoundedButton.vue'

    const emit = defineEmits(['change', 'delete'])

    let chosenAmount = ref(5)
    let selectedLimit = ref('max')

    function changeValue(value)
    {
        chosenAmount.value = value
    }
</script>