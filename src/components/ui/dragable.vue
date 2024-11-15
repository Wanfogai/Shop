<script setup lang="ts">
import { RefSymbol } from '@vue/reactivity';
import { onMounted, ref } from 'vue';

const emit = defineEmits<{
    mousedown: [event: MouseEvent],
    mousemove: [event: MouseEvent],
    mouseup: [event: MouseEvent]
}>()


const drag_wraper = ref()


</script>

<template>
    <div class="drager" @mousedown="" @mousemove="" @mouseup="" :ref="() => drag_wraper">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.drager {
    cursor: pointer;
}
</style>