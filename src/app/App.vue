<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { UiButton, Header, UiContainer, Card, UiSome } from '@/components';
import { store } from './store/store';
</script>

<template>
    <Header />
    <UiContainer class="Offers">
        <UiSome></UiSome>
    </UiContainer>
    <UiContainer class="body">
        <Card v-for="item in store.products" :desc="item.desc" :image="item.image" :exist="item.exist"
            :price="item.price" :raiting="item.raiting" />
    </UiContainer>
</template>

<style lang="scss" scoped>
.Offers {
display: flex;
justify-content: flex-start;
    align-items: flex-start;

    background-color: black;
    height: 450px;
}

.body {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 30px auto;
    height: 100%;
}
</style>
