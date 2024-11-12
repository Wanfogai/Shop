<script lang="ts" setup>
import { ref } from 'vue';
import { UiButton, UiContainer, UiLogo, UiInput } from '..';

//Параметры

</script>
<template>
    <div class="header">
        <UiContainer class="header_container">
            <UiLogo type="search">
                <h1>Core</h1>.io
            </UiLogo>
            <UiInput class="search"></UiInput>
            <div class="buttonContainer">
                <UiButton type="text">Корзина</UiButton>
                <UiButton type="text">Поддержка</UiButton>
                <UiButton type="text">О нас</UiButton>
            </div>
        </UiContainer>
    </div>
</template>

<style lang="scss" scoped>
.header {
    padding: 5px auto;
    height: 80px;
    background-color: white;

    border-radius: 0 0 5px 5px;

    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.header_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
}

.search {
    margin-left: 50px;
    height: 40px;
}

.buttonContainer {
    padding: 2px, 2px, 2px, 2px;
    font-size: 20px;
}
</style>
