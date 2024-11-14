<script lang="ts" setup>
import { ref } from 'vue';
import { Container, Logo, Input, UiButton, ButtonTypeEnum, IconTypeEnum } from '@/components';


//Параметры

</script>
<template>
    <div class="header">
        <Container class="header_container">
            <Logo :type=IconTypeEnum.Search>
                <h1>Core</h1>.io
            </Logo>
            <Input class="search"></Input>
            <div class="buttonContainer">
                <UiButton :type="ButtonTypeEnum.Text">Корзина</UiButton>
                <UiButton :type="ButtonTypeEnum.Text">Поддержка</UiButton>
                <UiButton :type="ButtonTypeEnum.Text">О нас</UiButton>
            </div>
        </Container>
    </div>
</template>

<style lang="scss" scoped>
@media(max-width:940px) {
    .buttonContainer {
        display: none;
    }
}

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
