<template>
    <div class="bg-background-image bg-cover h-full xl:h-screen w-fit sm:w-full">
        <div class="flex justify-center">
            <img 
                class="w-188.74px pt-8 sm:w-242px sm:pt-46px"
                src="@img/top-logo.png" 
            />
        </div>

        <div class="flex justify-center">
            <keep-alive>
                <component 
                    class="p-5 sm:p-0"
                    :is= "component"
                    @changePage="changePage"
                />
            </keep-alive>
        </div>
    </div>
</template>

<script setup>
    import FirstPage from '@/pages/FirstPage.vue'
    import { shallowRef } from 'vue'

    let component = shallowRef(FirstPage)

    function changePage(componentName)
    {
        component.value = componentName
    }
    
</script>
