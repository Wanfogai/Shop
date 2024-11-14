<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { Header, Container, Card, Carousel, UiButton, ButtonTypeEnum, UiIcon, IconTypeEnum } from '@/components';
import { store } from './store/store';
</script>

<template>
    <Header />
    <Container class="Offers">
        <Carousel :image-count="3" />

    </Container>
    <Container class="body">
        <Card v-for="item in store.products" :card="item" />

    </Container>
    <UiButton :type="ButtonTypeEnum.Text" class="basket" >
        <UiIcon :type="IconTypeEnum.Basket"></UiIcon>
    </UiButton>
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

.basket {
    position: fixed;
    bottom: 30px;
    right: 30px;
    transition: .3s;
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
