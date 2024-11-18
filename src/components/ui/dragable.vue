<script setup lang="ts">
import { RefSymbol } from '@vue/reactivity';
import { computed, onMounted, ref } from 'vue';

const donDragClass = computed(() => ({
    
}))

const emit = defineEmits<{
    mousedown: [event: MouseEvent],
    mousemove: [event: MouseEvent],
    mouseup: [event: MouseEvent]
}>()

const dragStart=ref(false)

const onMouseDown = (event:MouseEvent) => {
    emit('mousedown', event);
    dragStart.value = true;
}

const onMouseUp = (event:MouseEvent) =>
{
    emit('mouseup', event);
    dragStart.value = false;
}


const drag_wraper = ref()


</script>

<template>
    <div :class="`${dragStart?'drag':''}`" @mousedown="onMouseDown" @mousemove="" @mouseup="onMouseUp" :ref="() => drag_wraper">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.drager {
    cursor: pointer;
    outline: none;
    user-select: none;
    z-index: 9999;
}
</style>