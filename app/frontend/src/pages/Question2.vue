<template>
    <div>
        <div class="flex justify-center mt-1.875">
            <progress-bar :questionNumber="2" :totalQuestions="5"/>
        </div>

        <div class="mt-21px sm:mt-11">
            <Heading :headerText="headerText" />
        </div>

        <div class="flex justify-center mt-2 sm:mt-1.875">
            <div>
                <answer-block 
                    v-for="answer in answerBlocks"
                    @click="selectedAnswer = answer.blockText"
                    :isSelected="selectedAnswer == answer.blockText"
                    :isCorrect="answer.blockText == correctAnswer"
                    :blockText="answer.blockText"
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
    import AnswerBlock from '@/components/AnswerBlock.vue'
    import ProgressBar from '@/components/ProgressBar.vue'
    import LargeButton from '@/components/LargeButton.vue'
    import SmallBlock from '@/components/SmallBlock.vue'
    import InfoBlock from '@/components/InfoBlock.vue'
    import Heading from '@/components/Heading.vue'
    import Question3 from '@/pages/Question3.vue'

    const headerText = 'Which casino game offers you the best statistical chance of winning?'
    const bottomHeaderText = 'Select the answer to earn (10 Free Spins)'
    const emit = defineEmits(['change', 'delete'])

    const answerBlocks = ref([
        { blockText : 'slots'},
        { blockText : 'baccarat'},
        { blockText : 'blackjack'},
        { blockText : 'roulette'},
    ])

    const correctAnswer = 'blackjack'
    let selectedAnswer = ref('')

    const largeButtonEnabled = computed(() => {
        return selectedAnswer.value == correctAnswer
    })

    function changePage()
    {
        selectedAnswer.value = ''
        emit("changePage", Question3)
    }
</script>