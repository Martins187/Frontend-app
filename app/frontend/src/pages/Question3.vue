<template>
    <div>
        <div class="flex justify-center mt-1.875">
            <progress-bar :questionNumber="3" :totalQuestions="5"/>
        </div>

        <div class="mt-21px sm:mt-11">
            <Heading :headerText="headerText" />
        </div>

        <div class="flex justify-center">
            <div class="flex flex-wrap justify-center sm:mt-1.875 xl:w-1200px">
                <adjustive-block 
                    v-for="answer in answerBlocks"
                    @click="changeSelectedValue(answer.id)"
                    :blockText="answer.blockText"
                    :isSelected="answer.isSelected"
                />
            </div>
        </div>

        <div class="mt-28.13px sm:mt-34.7px">
            <heading-bottom 
                :headerText="bottomHeaderText" 
            />
        </div>

        <div class="mt-7 sm:mt-44px">
            <large-button 
                @buttonAction="changePage" 
                :isEnabled="largeButtonEnabled" 
                :buttonText="'Next'"
            />
        </div>

        <div class="flex justify-center mt-4 pb-78.67px sm:pb-95.68px"></div>
    </div>
</template>

<script setup>
    import { selectItem, checkIfMinimumSelected } from '@/helpers.js'
    import { computed, ref } from 'vue'

    import HeadingBottom from '@/components/HeadingBottom.vue'
    import ProgressBar from '@/components/ProgressBar.vue'
    import LargeButton from '@/components/LargeButton.vue'
    import Heading from '@/components/Heading.vue'
    import AdjustiveBlock from '@/components/AdjustiveBlock.vue'
    import Question4 from '@/pages/Question4.vue'

    const headerText = 'What kind of bonus do u prefer?'
    const bottomHeaderText = 'Please select at least 3 casino bonuses & earn (10 free spins)'
    const emit = defineEmits(['change', 'delete'])

    const answerBlocks = ref([
        {
            id:1,
            isSelected : false,
            blockText : 'free spins'
        },
        {
            id:2,
            isSelected : false,
            blockText : 'cashback'
        },
        {
            id:3,
            isSelected : false,
            blockText : '€100 casino bonus'
        },
        {
            id:4,
            isSelected : false,
            blockText : 'crazy bonus 400% casino bonus'
        },
        {
            id:5,
            isSelected : false,
            blockText : 'tourament €2000 cash every week'
        },
        {
            id:6,
            isSelected : false,
            blockText : 'deposit €20 & get 100 free spins'
        },
        {
            id:7,
            isSelected : false,
            blockText : 'highroller bonus 100% bonus up to €500'
        },
        {
            id:8,
            isSelected : false,
            blockText : '200% casino bonus up to €100'
        },
        {
            id:9,
            isSelected : false,
            blockText : '400% casino bonus'
        },
    ])

    let largeButtonEnabled = computed(() => {
       return checkIfMinimumSelected(3, answerBlocks.value)
    })

    function changeSelectedValue(id)
    {
        selectItem(id, answerBlocks.value)
    }

    function changePage()
    {
        answerBlocks.value.forEach(answer => answer.isSelected = false)
        emit("changePage", Question4)
    }
</script>