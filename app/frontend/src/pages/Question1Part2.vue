<template>
    <div>
        <div class="flex justify-center mt-1.875">
            <progress-bar :questionNumber="1" :totalQuestions="5"/>
        </div>

        <div class="mt-21px sm:mt-11">
            <Heading :headerText="headerText" />
        </div>

        <div class="flex justify-center mt-3 sm:mt-1.875">
            <info-block :infoText="'pick up favourite games'"/>
        </div>

        <div class="flex justify-center mt-2 sm:mt-1.875">
            <div class="w-357.24px flex flex-wrap justify-between sm:w-404px md:w-795px">
                <small-block 
                    v-for="icon in iconBlocks"
                    @click="changeSelectedValue(icon.id)"
                    :blockImageUrl="icon.blockImageUrl"
                    :isSelected="icon.isSelected"
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
    import { computed, ref } from 'vue'

    import HeadingBottom from '@/components/HeadingBottom.vue'
    import ProgressBar from '@/components/ProgressBar.vue'
    import LargeButton from '@/components/LargeButton.vue'
    import SmallBlock from '@/components/SmallBlock.vue'
    import InfoBlock from '@/components/InfoBlock.vue'
    import Heading from '@/components/Heading.vue'
    import Question2 from '@/pages/Question2.vue'

    import AllAboutSlotsLogo from '@img/all-about-slots-logo.png'
    import BoomBrothersLogo from '@img/boom-brothers-logo.png'
    import JohnHunterLogo from '@img/john-hunter-logo.png'
    import Pirates2Logo from '@img/pirates2-logo.png'
    import AvatarsLogo from '@img/avatars-logo.png'
    import PiratesLogo from '@img/pirates-logo.png'
    import ValleyLogo from '@img/valley-logo.png'
    import RamsesLogo from '@img/ramses-logo.png'
    import KrakenLogo from '@img/kraken-logo.png'

    const bottomHeaderText = 'Please select at least 3 casino games & earn (5 free spins)'
    const headerText = 'pick up your favorite providers & games'
    const emit = defineEmits(['change', 'delete'])

    const iconBlocks = ref([
        {
            id:1,
            isSelected : false,
            blockImageUrl : PiratesLogo
        },
        {
            id:2,
            isSelected : false,
            blockImageUrl : Pirates2Logo
        },
        {
            id:3,
            isSelected : false,
            blockImageUrl : ValleyLogo
        },
        {
            id:4,
            isSelected : false,
            blockImageUrl : PiratesLogo
        },
        {
            id:5,
            isSelected : false,
            blockImageUrl : Pirates2Logo
        },
        {
            id:6,
            isSelected : false,
            blockImageUrl : ValleyLogo
        },
        {
            id:7,
            isSelected : false,
            blockImageUrl : RamsesLogo
        },
        {
            id:8,
            isSelected : false,
            blockImageUrl : JohnHunterLogo
        },
        {
            id:9,
            isSelected : false,
            blockImageUrl : KrakenLogo
        },
        {
            id:10,
            isSelected : false,
            blockImageUrl : RamsesLogo
        },
        {
            id:11,
            isSelected : false,
            blockImageUrl : JohnHunterLogo
        },
        {
            id:12,
            isSelected : false,
            blockImageUrl : KrakenLogo
        },
        {
            id:13,
            isSelected : false,
            blockImageUrl : AvatarsLogo
        },
        {
            id:14,
            isSelected : false,
            blockImageUrl : AllAboutSlotsLogo
        },
        {
            id:15,
            isSelected : false,
            blockImageUrl : BoomBrothersLogo
        },
        {
            id:16,
            isSelected : false,
            blockImageUrl : AvatarsLogo
        },
        {
            id:17,
            isSelected : false,
            blockImageUrl : AllAboutSlotsLogo
        },
        {
            id:18,
            isSelected : false,
            blockImageUrl : BoomBrothersLogo
        },
    ])

    let largeButtonEnabled = computed(() => {
        let selectedItems = 0

        for(let i = 0; i < iconBlocks.value.length; i++)
        {
            if(iconBlocks.value[i].isSelected)
            {
                selectedItems++
            }
        }

        if(selectedItems >= 3)
        {
            return true
        }

        return false
    })

    function changeSelectedValue(id)
    {
        for(let i = 0; i < iconBlocks.value.length; i++)
        {
            if(iconBlocks.value[i].id == id)
            {
                iconBlocks.value[i].isSelected = !iconBlocks.value[i].isSelected
            }
        }
    }

    function changePage()
    {
        emit("changePage", Question2)
    }
</script>