<template>
    <div>
        <div class="mt-21px sm:mt-11">
            <Heading :headerText="headerText" />
        </div>

        <div class="flex justify-center mt-1.875">
            <info-block :infoText="'pick up favourite providers'"/>
        </div>

        <div class="flex justify-center mt-1.875">
            <div class="w-357.24px flex flex-wrap justify-between sm:w-404px md:w-795px">
                <small-block :blockImageUrl="PragmaticPlayIcon"/>
                <small-block :blockImageUrl="PragmaticPlayIcon"/>
                <small-block :blockImageUrl="PragmaticPlayIcon"/>
                <small-block :blockImageUrl="PragmaticPlayIcon"/>
                <small-block :blockImageUrl="PragmaticPlayIcon"/>
                <small-block :blockImageUrl="PragmaticPlayIcon"/>
                <small-block :blockImageUrl="PragmaticPlayIcon"/>
                <small-block :blockImageUrl="PragmaticPlayIcon"/>
                <small-block :blockImageUrl="PragmaticPlayIcon"/>
                <small-block :blockImageUrl="PragmaticPlayIcon"/>
                <small-block :blockImageUrl="PragmaticPlayIcon"/>
                <small-block :blockImageUrl="PragmaticPlayIcon"/>
                <small-block :blockImageUrl="PragmaticPlayIcon"/>
                <small-block :blockImageUrl="PragmaticPlayIcon"/>
                <small-block :blockImageUrl="PragmaticPlayIcon"/>
                <small-block :blockImageUrl="PragmaticPlayIcon"/>
                <small-block :blockImageUrl="PragmaticPlayIcon"/>
                <small-block :blockImageUrl="PragmaticPlayIcon"/>
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
    import HeadingBottom from '@/components/HeadingBottom.vue'
    import LargeButton from '@/components/LargeButton.vue'
    import SmallBlock from '@/components/SmallBlock.vue'
    import InfoBlock from '@/components/InfoBlock.vue'
    import Heading from '@/components/Heading.vue'
    import Question2 from '@/pages/Question1.vue'
    import { computed, ref } from 'vue'

    import PragmaticPlayIcon from '@img/pragmatic-play-icon.png'


    const bottomHeaderText = 'Please select at least 3 game providers & earn (5 free spins)'
    const headerText = 'pick up your favorite providers & games'
    const emit = defineEmits(['change', 'delete'])

    let selectedBlockName = ref('')

    const largeButtonEnabled = computed(() => {
        return selectedBlockName.value != ''
    })

    function changePage()
    {
        emit("changePage", Question2)
    }
</script>