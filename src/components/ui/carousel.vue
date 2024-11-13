<script setup lang="ts">
import { store } from '@/app/store';
import { UiButton, ButtonTypeEnum } from '@/components';
import { computed, onBeforeMount, onBeforeUnmount, ref } from 'vue';


/**Интервал переключения */
const toggleInterval = ref()
const wrapMargin = ref(0)

const currentId = ref(0)

const wraperStyle = computed(() => ({
    margin: wrapMargin.value + "%"
}))
const carouselStyle = computed(() => ({
    marginLeft: currentId.value * 100 + '%'
}))

/**После рендера */
onBeforeMount(() => {
    toggleInterval.value = setInterval(() => {
        if (currentId.value >= store.offers.length) {
            currentId.value = 0
        } else {
            // wrapMargin.value *= -currentId.value
        }
        console.log('interval')
    }, 3000)
})
/**Перед удалением */
onBeforeUnmount(() => {
    clearInterval(toggleInterval.value)
})

const LeftButton = () => { console.log("Hello"); currentId.value++; }



</script>
<template>
    <div class="wraper" :style="wraperStyle">
        <div class="carousel" :style="carouselStyle">
            <img :src="store.offers[1].image" alt="">
        </div>
    </div>
</template>



<style lang="scss" scoped>
.carousel img {

    width: 100%;
    height: 100%;
    border: solid
}

.wraper .carousel {
    display: flex;
    width: 100%;
    height: 100%;
}


.wraper {
    width: 100%;
    height: 100%;
}
</style>