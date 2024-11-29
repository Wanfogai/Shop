<script setup lang="ts">
import { store } from '@/app/store';
import { UiButton, ButtonTypeEnum } from '@/components';
import { computed, onBeforeMount, onBeforeUnmount, ref } from 'vue';

/**Номер изображения*/
const currentImage = ref(0);


const props = defineProps({
    imageCount: { type: Number, default: 2 },
})

const { imageCount } = props

/**Интервал переключения */
const toggleInterval = ref()

/**Размер прокрутки */
const corouselStyle = computed(() => ({
    marginLeft: -currentImage.value * 100 + "%"
}))



/**После рендера */
onBeforeMount(() => {
    toggleInterval.value = setInterval(() => {
        if (currentImage.value >= imageCount - 1)
            currentImage.value = 0;
        else { currentImage.value++; }
    }, 6000)
})
/**Перед удалением */
onBeforeUnmount(() => {
    clearInterval(toggleInterval.value)
})



</script>
<template>
    <div class="wraper">
        <div class="carousel" :style="corouselStyle">
            <img v-for="item, index in store.offers" :src="item.image" :alt="index.toString()">
        </div>
    </div>
</template>



<style lang="scss" scoped>
.carousel img {
    width: 100%;
    height: 100%;
}

.wraper .carousel {
    transition: 2s;
    display: ruby-text;
}

.wraper {
    overflow: hidden;
    height: 100%;
    user-select: none;
}
</style>