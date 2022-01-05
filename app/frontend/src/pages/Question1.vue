<template>
    <div>
        <div class="flex justify-center mt-1.875">
            <progress-bar :questionNumber="1" :totalQuestions="5"/>
        </div>

        <div class="mt-21px sm:mt-11">
            <Heading :headerText="headerText" />
        </div>

        <div class="flex justify-center mt-3 sm:mt-1.875">
            <info-block :infoText="'pick up favourite providers'"/>
        </div>

        <div class="flex justify-center mt-2 sm:mt-1.875">
            <div class="w-357.24px flex flex-wrap justify-between sm:w-404px md:w-795px">
                <small-block 
                    v-for="icon in iconBlocks"
                    @click="changeSelectedValue(icon.id)"
                    :blockImageUrl="icon.blockImageUrl"
                    :isSelected="icon.isSelected"
                    :background="'black'"
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
                :buttonText="'Pick Up Games'"
            />
        </div>

        <div class="flex justify-center mt-4 pb-78.67px sm:pb-95.68px"></div>
    </div>
</template>

<script setup>
    import { selectItem, checkIfMinimumSelected } from '@/helpers.js'
    import { computed, ref } from 'vue'

    import HeadingBottom from '@/components/HeadingBottom.vue'
    import Question1Part2 from '@/pages/Question1Part2.vue'
    import ProgressBar from '@/components/ProgressBar.vue'
    import LargeButton from '@/components/LargeButton.vue'
    import SmallBlock from '@/components/SmallBlock.vue'
    import InfoBlock from '@/components/InfoBlock.vue'
    import Heading from '@/components/Heading.vue'

    import PragmaticPlayIcon from '@img/pragmatic-play-icon.png'
    import BoomingGamesIcon from '@img/booming-games-icon.png'
    import MicroGamingIcon from '@img/microgaming-icon.png'
    import QuickSpinIcon from '@img/quickspin-icon.png'
    import GoldenHero from '@img/golden-hero-icon.png'
    import HabaneroIcon from '@img/habanero-icon.png'
    import IsoftbetIcon from '@img/isoftbet-icon.png'
    import EzugiIcon from '@img/ezugi-icon.png'
    import EgtIcon from '@img/egt-icon.png'

    const headerText = 'pick up your favorite providers & games'
    const bottomHeaderText = 'Please select at least 3 game providers & earn (5 free spins)'
    const emit = defineEmits(['change', 'delete'])

    const iconBlocks = ref([
        {
            id:1,
            isSelected : false,
            blockImageUrl : PragmaticPlayIcon
        },
        {
            id:2,
            isSelected : false,
            blockImageUrl : BoomingGamesIcon
        },
        {
            id:3,
            isSelected : false,
            blockImageUrl : EgtIcon
        },
        {
            id:4,
            isSelected : false,
            blockImageUrl : PragmaticPlayIcon
        },
        {
            id:5,
            isSelected : false,
            blockImageUrl : BoomingGamesIcon
        },
        {
            id:6,
            isSelected : false,
            blockImageUrl : EgtIcon
        },
        {
            id:7,
            isSelected : false,
            blockImageUrl : QuickSpinIcon
        },
        {
            id:8,
            isSelected : false,
            blockImageUrl : IsoftbetIcon
        },
        {
            id:9,
            isSelected : false,
            blockImageUrl : EzugiIcon
        },
        {
            id:10,
            isSelected : false,
            blockImageUrl : QuickSpinIcon
        },
        {
            id:11,
            isSelected : false,
            blockImageUrl : IsoftbetIcon
        },
        {
            id:12,
            isSelected : false,
            blockImageUrl : EzugiIcon
        },
        {
            id:13,
            isSelected : false,
            blockImageUrl : MicroGamingIcon
        },
        {
            id:14,
            isSelected : false,
            blockImageUrl : HabaneroIcon
        },
        {
            id:15,
            isSelected : false,
            blockImageUrl : GoldenHero
        },
        {
            id:16,
            isSelected : false,
            blockImageUrl : MicroGamingIcon
        },
        {
            id:17,
            isSelected : false,
            blockImageUrl : HabaneroIcon
        },
        {
            id:18,
            isSelected : false,
            blockImageUrl : GoldenHero
        },
    ])

    let largeButtonEnabled = computed(() => {
       return checkIfMinimumSelected(3, iconBlocks.value)
    })

    function changeSelectedValue(id)
    {
        selectItem(id, iconBlocks.value)
    }

    function changePage()
    {
        iconBlocks.value.forEach(block => block.isSelected = false)
        emit("changePage", Question1Part2)
    }
</script>