<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { Header, UiContainer, Card,UiCarousel } from '@/components';
import { store } from './store/store';
</script>

<template>
    <Header />
    <UiContainer class="Offers">
      
        <UiCarousel > Hello world</UiCarousel>
        
    </UiContainer>
    <UiContainer class="body">
        <Card v-for="item in store.products" :desc="item.Desc" :image="item.Image" :exist="item.Exist"
            :price="item.Price" :raiting="item.Raiting" />
    </UiContainer>
</template>

<style lang="scss" scoped>
.Offers {
    display: flex;
    justify-content: space-between;
    align-items: center;

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
