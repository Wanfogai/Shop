<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { Header, BasketMenu, Container, Card, Carousel, UiButton, ButtonTypeEnum, UiIcon, IconTypeEnum, Dragable } from '@/components';
import { store } from './store/store';
import { CardModel } from '@/components/widget/card/models/CardModel';
import { BasketItemModel } from '@/components/ui/basket-item/models/BasketItemModel';

/**Текущий перетаскиваемый элемент */
const currentDragging = ref<CardModel>()

const onBasketClick = () => store.basketMenuActive = !store.basketMenuActive

/**Переключение перетаскиваемого элемента */
const cardOnDrag = (isDrag: boolean, item: CardModel) => {
    currentDragging.value = isDrag ? item : undefined
}
/**Сброс элемента в корзину */
const onBasketDrop = () => {
    if (currentDragging.value) {
        store.basketProducts?.push(new BasketItemModel({
            Type: "ПК",
            Price: currentDragging.value.Price,
            Name: "RX580"
        }))
        console.log(store.basketProducts?.values)
    }
}
</script>

<template>
    <Header />
    <Container class="Offers">
        <Carousel :image-count="3" />

    </Container>
    <Container class="body">
        <Dragable class="drager" v-for="item in store.products" @drag="cardOnDrag($event, item)">
            <Card :card="item" />
        </Dragable>
    </Container>

    <Dragable @drop="onBasketDrop" :can-drag="false">
        <UiButton :type="ButtonTypeEnum.Text" class="basket" @click="onBasketClick">
            <UiIcon :type="IconTypeEnum.Basket" />
        </UiButton>
    </Dragable>
    <BasketMenu>

    </BasketMenu>
</template>

<style lang="scss" scoped>
.Offers {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: solid gray;
    border-width: 1;
    background-color: black;
    height: 450px;
}

.drag {
    z-index: 9999999;
}

.basket {
    position: fixed;
    bottom: 30px;
    right: 30px;
    transition: .3s;
    z-index: 9999999;
    transform: scale(0.80);
}

.body {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 30px auto;
    height: 100%;
}
</style>
