<script setup lang="ts">
import { store } from '@/app/store';
import { BasketItem } from '@/components/ui';
import { BasketItemModel } from '@/components/ui/basket-item/models/BasketItemModel';
import { ref, stop } from 'vue';

/**Закрытие корзины при нажатии на пустое пространство */
const closeBasket = () => store.basketMenuActive = !store.basketMenuActive

</script>
<template>

    <div v-if="store.basketMenuActive" class="background" @:click="closeBasket">

    </div>
    <div v-if="store.basketMenuActive" class="itemList">
        <span class="menuHeader">Корзина</span>
        <div class="menuBody">
            <BasketItem v-for="item in store.basketProducts" :item="item" class="basketItem" />
        </div>
        <div class="totalPrice">
            Итого:
            <span>{{ store.totalPrice }}$</span>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.itemList {
    position: fixed;
    top: 12%;
    left: 23%;
    background-color: white;
    width: 50%;
    height: 70%;
    border-radius: 10px;
    z-index: 99999999;
    border: solid 2px black;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px;
}

.totalPrice span {
    color: red;
}

.menuHeader {
    border-bottom: 5px solid black;
    width: 100%;
    height: 5%;
    padding-bottom: 5%;
    font-size: 40px;
    display: flex;
    justify-content: center;
}

.menuBody::-webkit-scrollbar {
    width: 0;
}

.menuBody {
    overflow-y: scroll;

}

.basketItem {
    padding: 10px;
    margin-top: 5px;
}

.background {
    font-size: larger !important;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, .5);
    z-index: 9999999;
}
</style>