<template>
    <div>
        <div class="flex justify-center mt-1.875">
            <progress-bar :questionNumber="5" :totalQuestions="5"/>
        </div>

        <div class="mt-21px sm:mt-11">
            <Heading :headerText="headerText" />
        </div>

        <range-picker />

        <div class="mt-28.13px sm:mt-34.7px">
            <heading-bottom 
                :headerText="bottomHeaderText" 
            />
        </div>

        <div class="mt-7 sm:mt-44px">
            <large-button 
                @buttonAction="changePage" 
                :isEnabled="true" 
                :buttonText="'Set'"
            />
        </div>

        <div class="flex justify-center mt-4 pb-78.67px sm:pb-95.68px"></div>
    </div>
</template>

<script setup>
    import { computed, ref } from 'vue'

    import HeadingBottom from '@/components/HeadingBottom.vue'
    import FixedAnswerBlock from '@/components/FixedBlock.vue'
    import ProgressBar from '@/components/ProgressBar.vue'
    import LargeButton from '@/components/LargeButton.vue'
    import InfoBlock from '@/components/InfoBlock.vue'
    import Heading from '@/components/Heading.vue'
    import RangePicker from '@/components/RangePicker.vue'
    import SuccessPage from '@/pages/SuccessPage.vue'

    const headerText = 'Please, set up your preferred betting range'
    const bottomHeaderText = 'Select the answer to earn (10 Free Spins)'
    const emit = defineEmits(['change', 'delete'])

    function changePage()
    {
        emit("changePage", SuccessPage)
    }
</script>