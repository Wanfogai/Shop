<script setup lang="ts">
import { CardModel } from '@/components/widget/card/models/CardModel';
import { computed, ref } from 'vue';
import { store } from '../store';
import { BasketItemModel } from '@/components/ui/basket-item/models/BasketItemModel';
import { ButtonTypeEnum, IconTypeEnum, Container, Card, Carousel, Dragable, UiButton, UiIcon, BasketMenu } from '@/components';

/**Текущий перетаскиваемый элемент */
const currentDragging = ref<CardModel>()

const onBasketClick = () => store.basketMenuActive = !store.basketMenuActive


/**Реизация поиска(элеметы фильтрующиеся по ключевым словам)*/
const items = computed(() => {
    return store.products.filter((el) => el.Name?.toLowerCase().trim().includes(store.searchString.toLowerCase().trim()))
})

/**Переключение перетаскиваемого элемента */
const cardOnDrag = (isDrag: boolean, item: CardModel) => {
    currentDragging.value = isDrag ? item : undefined
}
/**Сброс элемента в корзину */
const onBasketDrop = () => {
    if (currentDragging.value) {
        if (!currentDragging.value.Exist) alert("Данного товара нет в наличии")
        else {
            store.totalPrice += currentDragging.value.Price
            store.basketProducts.push(new BasketItemModel({
                Type: currentDragging.value.Type,
                Price: currentDragging.value.Price,
                Name: currentDragging.value.Name
            }))
        }
    }
}
</script>

<template>
    <Container class="Offers">
        <Carousel :image-count="3" />
    </Container>
    <Container class="body">
        <Dragable v-for="item in items" @drag="cardOnDrag($event, item)">
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
    border: solid black;
    border-width: 0.3px;
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