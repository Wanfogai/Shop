<script setup lang="ts">
import { getCurrentScope, RefSymbol } from '@vue/reactivity';
import { computed, getCurrentInstance, onMounted, ref } from 'vue';


const $dragWraper = ref<HTMLDivElement>()
const cloneEl = ref<HTMLDivElement>()

const isDrag = computed(() => !!cloneEl.value)

const emit = defineEmits<{
    mousedown: [event: MouseEvent],
    mousemove: [event: MouseEvent],
    mouseup: [event: MouseEvent]
}>()

const onMouseDragDowm = (event: MouseEvent) => {
    if (!$dragWraper.value) return
    emit("mousedown", event)
    const el = document.createElement('div')
    el.innerHTML = $dragWraper.value.innerHTML
    el.classList.add('dragging')
    cloneEl.value = el
    document.body.appendChild(cloneEl.value)
    document.addEventListener('mouseup', onMouseDargUp)
    document.addEventListener('mousemove', onMouseDragMove)
}

const onMouseDargUp = (event: MouseEvent) => {
    cloneEl.value?.remove()
    emit("mouseup", event)
    document.removeEventListener('mouseup', onMouseDargUp)
    document.removeEventListener('mousemove', onMouseDragMove)
}

const onMouseDragMove = (event: MouseEvent) => {
    emit("mousemove", event)
    if (!cloneEl.value) return
    cloneEl.value.style.left = `${event.x - 200}px`
    cloneEl.value.style.top = `${event.y}px`
}

</script>

<template>
    <div ref="$dragWraper" @mousedown="onMouseDragDowm">
        <slot />
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
<style lang="scss">
.dragging {
    position: fixed;
    z-index: 100000;
}
</style>