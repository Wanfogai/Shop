<script setup lang="ts">
import { PropType } from 'vue';
import { IconTypeEnum } from './enums';



const props = defineProps({
    type: { type: String as PropType<IconTypeEnum> }
})


const icons = require('@/app/assets/icons/' + props.type + '.svg')
</script>
<template>
    <img :src="icons" alt="">
</template>
<style lang="scss" scoped></style>