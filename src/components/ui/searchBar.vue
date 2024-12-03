<script lang="ts" setup>
import { store } from '@/app/store';
import { UiIcon, UiButton, ButtonTypeEnum, IconTypeEnum } from '@/components';
import { ref, defineModel } from 'vue';

</script>
<template>
    <div class="inputContaier">
        <input type="search" v-model="store.searchString">
        <UiButton :type="ButtonTypeEnum.Text">
            <UiIcon :type="IconTypeEnum.Search"></UiIcon>
        </UiButton>
    </div>
</template>
<style lang="scss" scoped>
input {
    border: none;
    outline: none;
    font-size: 1em;
    width: 95%;
}

.inputContaier {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 8px;

    border-radius: 20px 20px 20px 20px;
    width: 20%;
    height: 60%;
    box-shadow: rgba(0, 10, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 7px 13px -3px, rgba(0, 0, 0, 0.1) 0px -3px 0px inset;
}
</style>