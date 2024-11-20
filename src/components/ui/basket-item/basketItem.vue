<script setup lang="ts">
import { ButtonTypeEnum, UiButton } from '@/components';
import { PropType } from 'vue';
import { BasketItemModel } from './models/BasketItemModel';

const props = defineProps({
    item: { type: Object as PropType<BasketItemModel>, defaut: () => new BasketItemModel() }
})

</script>
<template>
    <div class="itemContainer">
        <span>{{ props.item?.Type }}</span>
        <span>{{ props.item?.Name }}</span>
        <span>{{ props.item?.Price }}</span>
        <UiButton :type="ButtonTypeEnum.Solid">Отмена</UiButton>
    </div>
</template>
<style lang="stylus" scoped></style>