<script setup lang="ts">
import { ButtonTypeEnum, UiButton } from '@/components';
import { PropType, ref } from 'vue';
import { BasketItemModel } from './models/BasketItemModel';
import { store } from '@/app/store';


/**Контейнер хранящий объекты товаров */
const $itemContainer = ref<HTMLDivElement>()

const onClick = (item?: BasketItemModel) => {
    if (!item?.Price) return
    store.totalPrice -= item.Price;
    store.basketProducts = store.basketProducts.filter((el) => el != item);
}

const props = defineProps({
    item: { type: Object as PropType<BasketItemModel>, defaut: () => new BasketItemModel() }
})

</script>
<template>
    <div class="itemContainer" ref="$itemContainer">
        <span>{{ props.item?.Type }}</span>
        <span>{{ props.item?.Name }}</span>
        <span class="itemPrice">{{ props.item?.Price }}$</span>
        <UiButton :type="ButtonTypeEnum.Solid" @click="onClick(props.item)">Отмена</UiButton>
    </div>
</template>
<style lang="scss" scoped>
.itemContainer {
    display: flex;
    width: 100;
    border: solid 2px black;
    border-radius: 7px;
    justify-content: space-between;
    background-color: white;
    align-items: center;
}

.itemPrice {
    color: red;
}
</style>