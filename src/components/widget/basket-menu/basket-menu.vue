<script setup lang="ts">
import { store } from '@/app/store';
import { BasketItem } from '@/components/ui';
import { BasketItemModel } from '@/components/ui/basket-item/models/BasketItemModel';
import { ref, stop } from 'vue';

/**Закрытие корзины при нажатии на пустое пространство */
const closeBasket = () => store.basketMenuActive = !store.basketMenuActive

</script>
<template>
    <div v-if="store.basketMenuActive" class="container" @:click="closeBasket">
        <div class="itemList">
            <span class="menuHeader">Корзина</span>
            <div class="menuBody">
                <BasketItem v-for="item in store.basketProducts" :item="item"/>
            </div>
            <div class="totalPrice">Итого:{{store.totalPrice}}</div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.itemList {
    background-color: white;
    width: 50%;
    height: 70%;
    border-radius: 10px;
    z-index: 99999999;
    border-style: groove;
    border-color: cadetblue;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px;
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

.menuBody {}

.container {
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