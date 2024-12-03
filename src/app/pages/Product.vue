<script setup lang="ts">
import { computed, ref } from 'vue';
import { store } from '../store';
import { CardModel } from '@/components/widget/card/models/CardModel';
import { useRoute, useRouter } from 'vue-router';
import { IconTypeEnum, UiIcon, UiButton, ButtonTypeEnum } from '@/components';


/**Подключение компонента route дял получения id продукта */
const route = useRoute()

/**подключение роутера для перемещения */
const router = useRouter()


/**Переменная конкретноо продукта для отображения */
const product = ref<CardModel>()


/**Стили для кнопки и надписи в наличии */
const productExistStyle = computed(() => ({
    buttonColor: product.value?.Exist ? 'green' : 'gray',
    existColor: product.value?.Exist ? 'green' : 'red'
}))


//Проверка не выходит ли id объекта за массив объектов
if (parseInt(route.params.id.toString()) > store.products.length) router.push("/")
else product.value = store.products[parseInt(route.params.id.toString())]

</script>

<template>

    <div class="productBox">
        <div class="imageBoard"><img :src="product?.Image" alt="" class="mainImage"></div>
        <div class="infoBoard">
            <span class="prodName">{{ product?.Name }}</span>
            <br>
            <UiIcon v-for="(index) in 5"
                :type='index <= product?.Raiting ? IconTypeEnum.FullStar : IconTypeEnum.EmptyStar' class="prodStar">
                <br>
            </UiIcon>
            <span class="prodPrice">{{ product?.Price }}$</span>
            <br>
            <span class="proExist" :style="{ color: productExistStyle.existColor }">
                {{ product?.Exist ? "Есть в наличии" : "Нет наличии" }}
            </span>

            <UiButton :type="ButtonTypeEnum.Solid" :color="productExistStyle.buttonColor" font-color="white">Купить
            </UiButton>
        </div>

    </div>

</template>

<style lang="scss" scoped>
.imageBoard {
    width: 20%;
    height: max-content;
    border: solid gray 0.5px;
}

.infoBoard{
    
}

.productBox {
    display: flex;
    flex-direction: row;
    padding: 20px;
    border: solid 2 black;
}

.mainImage {
    width: 100%;
    height: 100%;
}
</style>