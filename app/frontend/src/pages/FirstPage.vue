<template>
    <div>
        <div class="sm:mt-11">
            <Heading :headerText="headerText" />
        </div>

        <div class="flex justify-center mt-29.48px sm:mt-12">
            <div class="w-342.95px flex flex-wrap justify-between sm:w-562.45px ">
                <icon-block 
                    v-for="icon in iconBlocks"
                    @click="selectedBlockName = icon.blockText" 
                    :selectedBlockName="selectedBlockName" 
                    :blockImageUrl="icon.blockImageUrl" 
                    :blockText="icon.blockText"
                />
            </div>
        </div>

        <div class="mt-28.13px sm:mt-34.7px">
            <heading-bottom :headerText="bottomHeaderText" />
        </div>

        <div class="mt-7 sm:mt-44px">
            <large-button 
                @buttonAction="changePage" 
                :isEnabled="largeButtonEnabled" 
                :buttonText="'Start'"
            />
        </div>

        <div class="flex justify-center mt-4 pb-78.67px sm:pb-95.68px">
            <div class="text-sm font-fredokaOne text-white">
                Already a member? 

                <a href="#">
                    <u>Login</u>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
    import HeadingBottom from '@/components/HeadingBottom.vue'
    import LargeButton from '@/components/LargeButton.vue'
    import IconBlock from '@/components/IconBlock.vue'
    import Heading from '@/components/Heading.vue'
    import Question1 from '@/pages/Question1.vue'
    import { computed, ref } from 'vue'

    import DragonAndTigerIconUrl from '@img/dragon-and-tiger-icon.png'
    import BlackjackIconUrl from '@img/black-jack-icon.png'
    import RouletteIconUrl from '@img/roulette-icon.png'
    import BaccaratIconUrl from '@img/baccarat-icon.png'
    import PokerIconUrl from '@img/poker-icon.png'
    import SlotsIconUrl from '@img/slots-icon.png'


    const bottomHeaderText = 'Complete short QUIZ to test your casino knowledge and you’ll be rewarded with a special Bonus.'
    const headerText = 'pick any category, complete quiz & earn casino prize'
    const emit = defineEmits(['change', 'delete'])

    let selectedBlockName = ref('')

    const largeButtonEnabled = computed(() => {
        return selectedBlockName.value != ''
    })

    const iconBlocks = [
        
        { blockImageUrl : DragonAndTigerIconUrl, blockText : 'Dragon & Tiger'},
        { blockImageUrl : BlackjackIconUrl, blockText : 'Blackjack'},
        { blockImageUrl : RouletteIconUrl, blockText : 'Roulette'},
        { blockImageUrl : BaccaratIconUrl, blockText : 'Baccarat'},
        { blockImageUrl : PokerIconUrl, blockText : 'Poker'},
        { blockImageUrl : SlotsIconUrl, blockText : 'Slots'},
    ]

    function changePage()
    {
        emit("changePage", Question1)
    }
</script>