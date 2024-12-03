<script setup lang="ts">
import { getCurrentScope, RefSymbol } from '@vue/reactivity';
import { computed, getCurrentInstance, onMounted, onUnmounted, ref } from 'vue';
import { PositionModel } from './models/PositionModel';
import { CardModel } from '@/components/widget/card/models/CardModel';
import { Methods } from '@/app/store/methods';

/**HTML елементы DragWrap и самого клона */
const $dragWraper = ref<HTMLDivElement>()

const cloneEl = ref<HTMLDivElement>()

const cursorStyle = ref<HTMLStyleElement>()

const screenPos = ref<PositionModel>()

const props = defineProps({
    canDrag: {
        type: Boolean, default: true
    }
})

//Переменные расчета начальной точки перемещения
const offsetX = ref()
const offsetY = ref()

/**Проверка идет ли перетаскивание*/
const isDrag = computed(() => {
    emit('drag', !!cloneEl.value)
    return !!cloneEl.value
})

const emit = defineEmits<{
    drag: [isDrag: boolean],
    drop: []
}>()

onMounted(() => {
    //Задание позицыы курсора относительно экрана
    if (!$dragWraper.value) return
    screenPos.value = new PositionModel($dragWraper.value.getBoundingClientRect());
})

onUnmounted(() => {
    //Очищение при удалении
    if (!screenPos.value) return
    screenPos.value = new PositionModel(undefined)
})

/**При нажатии лкм */
const onMouseDragDowm = (event: MouseEvent) => {
    if (!props.canDrag) return
    //Расчитывание позиции эллемента относительно страницы
    if (!$dragWraper.value) return
    screenPos.value = new PositionModel($dragWraper.value.getBoundingClientRect());

    //добавление класса "пустой к оригиналу"
    $dragWraper.value.classList.add("empty")


    //Создание клона карточки
    const el = document.createElement('div')
    el.innerHTML = $dragWraper.value.innerHTML
    el.classList.add('dragging')
    cloneEl.value = el

    //Задание начальной позиции
    if (!screenPos.value) return
    offsetX.value = event.clientX - screenPos.value.x;
    offsetY.value = event.clientY - screenPos.value.y;


    //Перемещение на начальную позицию
    if (!cloneEl.value) return
    cloneEl.value.style.left = `${event.clientX - offsetX.value}px`
    cloneEl.value.style.top = `${event.clientY - offsetY.value}px`

    //Задание стиля курсора (сжатый кулак)
    cursorStyle.value = document.createElement('style')
    cursorStyle.value.innerHTML = '*{cursor: grabbing!important;}'
    cursorStyle.value.id = "cursorStyle"


    //Добавление клона на страницу и присваивание ему эвентов
    document.body.appendChild(cloneEl.value)
    document.head.appendChild(cursorStyle.value);
    document.addEventListener('mouseup', onMouseDargUp)
    document.addEventListener('mousemove', onMouseDragMove)
    
}

const onMouseDargUp = (event: MouseEvent) => {

    //Удаление класса "пустой" у оригинала
    if (!$dragWraper.value) return
    $dragWraper.value.classList.remove("empty")

    //При отпусании карты удалить объект и его эвенты
    cloneEl.value?.remove()
    cloneEl.value = undefined

    //Удаление стиля курсора
    cursorStyle.value?.remove();


    //Удаление евентов
    document.removeEventListener('mouseup', onMouseDargUp)
    document.removeEventListener('mousemove', onMouseDragMove)
    Methods.ClearAllDraging();
}

/**Перемещение карты  */
const onMouseDragMove = (event: MouseEvent) => {
    if (!cloneEl.value) return
    cloneEl.value.style.left = `${event.clientX - offsetX.value}px`
    cloneEl.value.style.top = `${event.clientY - offsetY.value}px`
}
</script>


<template>
    <div ref="$dragWraper" class="drager" @mousedown="onMouseDragDowm" @mouseup="emit('drop')">
        <slot v-if="!isDrag" />
    </div>
</template>


<style lang="scss" scoped>
.empty {
    background-color: blueviolet;
    width: 322px;
    height: 572px;
}



.drager {
    cursor: grab;
    outline: none;
    user-select: none;
    z-index: 9999;

}
</style>



<style lang="scss">
.dragging {
    position: fixed;
    pointer-events: none;
    z-index: 100000;
}
</style>