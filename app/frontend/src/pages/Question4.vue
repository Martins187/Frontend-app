<template>
    <div>
        <div class="flex justify-center mt-1.875">
            <progress-bar :questionNumber="4" :totalQuestions="5"/>
        </div>

        <div class="mt-21px sm:mt-11">
            <Heading :headerText="headerText" />
        </div>

        <div class="flex justify-center mt-2 sm:mt-1.875">
            <div>
                <fixed-answer-block 
                    v-for="answer in answerBlocks"
                    @click="selectedAnswer = answer.blockText"
                    :isSelected="selectedAnswer == answer.blockText"
                    :isCorrect="answer.blockText == correctAnswer"
                    :blockText="answer.blockText"
                    :largeScreenWidth="'562.45px'"
                    :smallScreenWidth="'345px'"
                />
            </div>
        </div>

        <div class="mt-28.13px sm:mt-34.7px">
            <heading-bottom 
                v-if="selectedAnswer == ''"
                :headerText="bottomHeaderText" 
            />
            <div 
                v-else 
                class="flex justify-center text-30 font-fredokaOne sm:text-36">
                <div 
                    v-if="selectedAnswer != correctAnswer"
                    class="text-red">
                    That’s not it, try again!
                </div>
                <div 
                    v-else
                    class="text-green">
                    You won 10 Free Spins!
                </div>
            </div>
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
    import { computed, ref } from 'vue'

    import HeadingBottom from '@/components/HeadingBottom.vue'
    import FixedAnswerBlock from '@/components/FixedBlock.vue'
    import ProgressBar from '@/components/ProgressBar.vue'
    import LargeButton from '@/components/LargeButton.vue'
    import InfoBlock from '@/components/InfoBlock.vue'
    import Heading from '@/components/Heading.vue'
    import Question5 from '@/pages/Question5.vue'

    const headerText = 'In Blackjack basic strategy, what is the exception for double down on 11?'
    const bottomHeaderText = 'Select the answer to earn (10 Free Spins)'
    const emit = defineEmits(['change', 'delete'])

    const answerBlocks = ref([
        { blockText : "A or 10 for the dealer"},
        { blockText : "if u have couple of 8's"},
        { blockText : "don't have any exceptions"},
    ])

    const correctAnswer = "don't have any exceptions"
    let selectedAnswer = ref('')

    const largeButtonEnabled = computed(() => {
        return selectedAnswer.value == correctAnswer
    })

    function changePage()
    {
        selectedAnswer.value = ''
        emit("changePage", Question5)
    }
</script>