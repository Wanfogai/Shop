<script lang="ts" setup>
import { ref, defineModel, ModelRef } from 'vue';
import { Container, Logo, searchBar, UiButton, ButtonTypeEnum, IconTypeEnum } from '@/components';


</script>
<template>
    <div class="header">
        <Container class="header_container">
            <RouterLink to="/" class="rout">
                <Logo :type=IconTypeEnum.Search>
                    <h1>Core</h1>.io
                </Logo>
            </RouterLink>
            <searchBar class="search"></searchBar>
            <div class="buttonContainer">
                <UiButton :type="ButtonTypeEnum.RoutText" route-to="support">Поддержка</UiButton>
                <UiButton :type="ButtonTypeEnum.RoutText" route-to="/about">О нас</UiButton>
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
