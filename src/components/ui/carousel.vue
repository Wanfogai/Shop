<script setup lang="ts">
import { store } from '@/app/store';
import { UiButton } from '@/components/ui/ui-button';
import { computed, onBeforeMount, onBeforeUnmount, ref } from 'vue';
import { ButtonTypeEnum } from '@/components/ui/ui-button';


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
            <UiButton :type="ButtonTypeEnum.Solid" class="scrolLeft" text="<" width="35" height="90" fontWeight="500" fontSize="30"
                opacity="0.5" />
            <img :src="store.offers[1].image" alt="">
            <UiButton class="scrolRight" :type="ButtonTypeEnum.Text" text=">" width="35" height="90" fontWeight="500" fontSize="30"
                opacity="0.5" />
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

.wraper .scrolRight {}

.wraper .scrolLeft {}

.wraper {
    width: 100%;
    height: 100%;
}
</style>