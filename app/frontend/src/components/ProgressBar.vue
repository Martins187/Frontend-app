<template>
    <div class="flex justify-center">
        <div class="h-10">
            <div class="w-274px h-10">
                <div class="text-center text-14 text-yellow 
                    font-fredokaOne uppercase">
                    question {{ questionNumber }}/{{ totalQuestions }}
                </div>

                <div class="mt-11px flex justify-between">
                    <div 
                        v-for="tile in progressTiles"
                        class="w-50px h-5px bg-white opacity-30 rounded-3px"
                        :class="[tile.completed ? ['opacity-100'] : '']">
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
        for(let i = 1; i <= totalQuestions.value; i++)
        {
            progressTiles.value.push({
                tileNumber: i,
                completed: false,
            })
        }

        for(let i = 1; i <= questionNumber.value; i++)
        {
            progressTiles.value[i-1].completed = true
        }
    }

    buildProgressBar()
</script>