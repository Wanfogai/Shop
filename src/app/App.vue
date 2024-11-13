<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { Header, Container, Card, Carousel } from '@/components';
import { store } from './store/store';
</script>

<template>
    <Header />
    <Container class="Offers">

        <Carousel> Hello world</Carousel>

    </Container>
    <Container class="body">
        <Card v-for="item in store.products" :card="item" />
        
    </Container>
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
    justify-content: space-evenly;
    align-items: center;
    margin: 30px auto;
    height: 100%;
}
</style>
