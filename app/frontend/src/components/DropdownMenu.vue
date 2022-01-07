<template>
    <div>  
        <select 
            v-model="selectedValue"
            class="border-1 border-solid border-bluish-grey rounded-10px 
            text-dark-grey text-18 text-center uppercase font-fredokaOne
            bg-gradient-to-b from-white to-bluish-grey 
            sm:w-160px sm:h-80px
            w-60px h-60px">
            <option 
                v-for="item in items"
                @click="selectedValue = item.name">
                {{ item.name }}
            </option>
        </select>
    </div>
</template>

<style>

</style>

<script setup>
    import { computed, ref } from 'vue'

    const emit = defineEmits(['change', 'delete'])

    const props = defineProps({
        items: {},
    })

    const items = computed(() => {
        return props.items
    })

    let selectedValue = ref('eur')

    // function changeValue(value)
    // {
    //     chosenAmount.value = value
    // }
</script>