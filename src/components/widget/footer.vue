<script setup lang="ts">
import { ButtonTypeEnum, UiButton } from '../ui';
</script>

<template>
    <footer>
        <div class="info">
            <UiButton :type="ButtonTypeEnum.RoutText">Hello</UiButton>
            <UiButton :type="ButtonTypeEnum.RoutText">World</UiButton>
            <UiButton :type="ButtonTypeEnum.RoutText">Test</UiButton>
            <UiButton :type="ButtonTypeEnum.RoutText">Block</UiButton>
        </div>
        <div class="company">Copyright by Wanfogame<p>2006-2024</p>
        </div>
    </footer>
</template>
<style lang="scss" scoped>
footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5px auto;
    height: 80px;
    background-color: white;
    margin-top: auto;
    border-radius: 0 0 5px 5px;
    user-select: none;


    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.info {
    padding: 5px;
    margin-bottom: 10px;
}

.company {
    line-height: 2px;
    font-size: small;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>