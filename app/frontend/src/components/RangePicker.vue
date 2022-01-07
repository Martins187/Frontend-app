<template>
    <div>
        <div 
            class="text-white uppercase text-18 font-fredokaOne
            flex justify-center mt-21px">
            Deposit Limit Per month
        </div>

        <div class="flex justify-center">
            <div 
                class="h-60px items-center mt-21px
                sm:flex sm:justify-center">
                <div class="flex justify-center mb-4">
                    <rounded-button
                        @click="selectedLimit = 'max'"
                        :isSelected="selectedLimit == 'max'"
                        :buttonText="'max'"
                    />
                </div>

                <slider 
                    @changeAmount="changeValue"
                    :chosenAmount="chosenAmount"
                />

                <div class="flex justify-center mt-4">
                    <rounded-button
                        @click="selectedLimit = 'min'"
                        :isSelected="selectedLimit == 'min'"
                        :buttonText="'min'"
                    />
                </div>
            </div>
        </div>

        <div 
            class="flex justify-center mt-9 sm:mt-46px">
            <input 
                type="text"
                v-model="chosenAmount"
                class="border-1 border-solid border-bluish-grey rounded-10px 
                text-dark-grey text-48 text-center font-fredokaOne
                bg-gradient-to-b from-white to-bluish-grey 
                sm:w-508px sm:h-80px
                w-15.25">
                
            <dropdown-menu 
                class="ml-0.625"
                :items="currencies"
            />
        </div>

        <div class="flex justify-center">
            <!--payment methods -->
        </div>
    </div>
</template>

<script setup>
    import { computed, ref } from 'vue'

    import RoundedButton from '@/components/RoundedButton.vue'
    import DropdownMenu from '@/components/DropdownMenu.vue'
    import Slider from '@/components/Slider.vue'

    const emit = defineEmits(['change', 'delete'])

    const currencies = [
        {name: 'eur'},
        {name: 'usd'},
        {name: 'gbp'},
        {name: 'jpy'}
    ]

    let selectedLimit = ref('max')
    let chosenAmount = ref(5)

    function changeValue(value)
    {
        chosenAmount.value = value
    }
</script>