<script setup lang="ts">
import { getCurrentScope, RefSymbol } from '@vue/reactivity';
import { computed, getCurrentInstance, onMounted, onUnmounted, ref } from 'vue';
import { PositionModel } from './models/PositionModel';

//HTML елементы DragWrap и самого клона
const $dragWraper = ref<HTMLDivElement>()

const cloneEl = ref<HTMLDivElement>()

const sreenPos = ref<PositionModel>()

//Переменные расчета начальной точки перемещения
const offsetX = ref()
const offsetY = ref()

//Проверка идет ли перетаскивание
const isDrag = computed(() => !!cloneEl.value)

const emit = defineEmits<{
    mousedown: [event: MouseEvent],
    mousemove: [event: MouseEvent],
    mouseup: [event: MouseEvent]
}>()

const onMouseDragDowm = (event: MouseEvent) => {
    if (!$dragWraper.value) return
    emit("mousedown", event)

    //Создание клона карточки
    const el = document.createElement('div')
    el.innerHTML = $dragWraper.value.innerHTML
    el.classList.add('dragging')
    cloneEl.value = el


    console.log(`Button Down : ${isDrag.value}`);

    //Задание начальной позиции
    if (!sreenPos.value) return
    offsetX.value = event.clientX - sreenPos.value.x;
    offsetY.value = event.clientY - sreenPos.value.y;

    //Добавление клона на страницу и присваивание ему эвентов
    document.body.appendChild(cloneEl.value)
    document.addEventListener('mouseup', onMouseDargUp)
    document.addEventListener('mousemove', onMouseDragMove)
}

const onMouseDargUp = (event: MouseEvent) => {
    emit("mouseup", event)



    //При отпусании карты удалить объект и его эвенты
    cloneEl.value?.remove()
    cloneEl.value = undefined

    console.log(`Button up and remove : ${isDrag.value}`);
    document.removeEventListener('mouseup', onMouseDargUp)
    document.removeEventListener('mousemove', onMouseDragMove)
}

const onMouseDragMove = (event: MouseEvent) => {
    emit("mousemove", event)

    //Перемещение карты 
    if (!cloneEl.value) return
    cloneEl.value.style.left = `${event.clientX - offsetX.value}px`
    cloneEl.value.style.top = `${event.clientY - offsetY.value}px`
}

onMounted(() => {
    //Задание позицыы курсора относительно экрана
    if (!$dragWraper.value) return
    sreenPos.value = new PositionModel($dragWraper.value.getBoundingClientRect());
})

onUnmounted(() => {
    if (!sreenPos.value) return
    sreenPos.value = new PositionModel(undefined)
})

</script>

<template>
    <div ref="$dragWraper" @mousedown="onMouseDragDowm">
        <slot v-if="true" />
    </div>
</template>

<style lang="scss" scoped>
.empty {
    background-color: gray !important;
    color: rebeccapurple;
}



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