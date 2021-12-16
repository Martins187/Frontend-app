<template>
    <div>
        <div class="mt-21px sm:mt-11">
            <Heading :headerText="headerText" />
        </div>
        <div class="flex justify-center mt-12">
            <div class="w-342.95px bg-green-200 flex flex-wrap justify-between sm:w-562.45px ">
                <icon-block :blockImageUrl="BlackjackIconUrl" :blockText="'Blackjack'"/>
                <icon-block :blockImageUrl="RouletteIconUrl" :blockText="'Roulette'"/>
                <icon-block :blockImageUrl="BaccaratIconUrl" :blockText="'Baccarat'"/>
                <icon-block :blockImageUrl="PokerIconUrl" :blockText="'Poker'"/>
                <icon-block :blockImageUrl="DragonAndTigerIconUrl" :blockText="'Dragon & Tiger'"/>
                <icon-block :blockImageUrl="SlotsIconUrl" :blockText="'Slots'"/>
            </div>
        </div>
        <div class="mt-28.13px sm:mt-34.7px">
            <heading-bottom :headerText="bottomHeaderText" />
        </div>
       
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import Question1 from '@/pages/Question1.vue'
    import Heading from '@/components/Heading.vue'
    import HeadingBottom from '@/components/HeadingBottom.vue'
    import IconBlock from '@/components/IconBlock.vue'

    import BlackjackIconUrl from '@img/black-jack-icon.png'
    import RouletteIconUrl from '@img/roulette-icon.png'
    import BaccaratIconUrl from '@img/baccarat-icon.png'
    import PokerIconUrl from '@img/poker-icon.png'
    import DragonAndTigerIconUrl from '@img/dragon-and-tiger-icon.png'
    import SlotsIconUrl from '@img/slots-icon.png'


    const emit = defineEmits(['change', 'delete'])
    const headerText = 'pick any category, complete quiz & earn casino prize'
    const bottomHeaderText = 'Complete short QUIZ to test your casino knowledge and you’ll be rewarded with a special Bonus.'

    function changePage()
    {
        emit("changePage", Question1)
    }
</script>