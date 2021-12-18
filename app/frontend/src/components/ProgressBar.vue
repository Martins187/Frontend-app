<template>
    <div class="flex justify-center">
        <div class="h-10">
            <div class="w-274px h-10 bg-red-500">
                <div class="text-center text-14 text-yellow 
                    font-fredokaOne uppercase">
                    question {{ questionNumber }}/{{ totalQuestions }}
                </div>

                <div class="mt-0.5 flex justify-between">
                    <div 
                        v-for="tile in progressTiles"
                        class="w-50px h-5px bg-white opacity-30 rounded-3px">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { computed, ref } from 'vue'

    let progressTiles = ref([])

    const props = defineProps({
        questionNumber: {},
        totalQuestions: {}
    })

    const questionNumber = computed(() => {
        return props.questionNumber
    })

    const totalQuestions = computed(() => {
        return props.totalQuestions
    })

    function buildProgressBar()
    {
        let tileNumber = 1

        totalQuestions.foreach((question)=> {
            progressTiles.push({
                tileNumber: tileNumber,
                completed: false,
            })

            tileNumber++
        })

        console.log(progressTiles)
    }

    buildProgressBar()


  
</script>