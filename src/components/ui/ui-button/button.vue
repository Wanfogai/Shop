<script lang="ts" setup>
import { computed, onBeforeUnmount, onMounted, PropType, ref } from 'vue';
import { ButtonTypeEnum } from './enums/ButtonTypeEnum';
//Параметры
const props = defineProps({
    //Тип кнопки (простая кнопка или текстовая)
    // type: "solid" | "text";
    type: { type: String as PropType<ButtonTypeEnum> },
    text: { type: String, default: '' },
    width: { type: String, default: '' },
    height: { type: String, default: '' },
    fontSize: { type: String, default: '' },
    fontWeight: { type: String, default: '' },
    opacity: { type: String, default: '' },
})



/**События */
const emit = defineEmits<{
    /**Клик*/
    click: [event: MouseEvent]
}>()

/**При клике */
const onClick = (event: MouseEvent) => {
    emit('click', event)
    props.type == ButtonTypeEnum.Solid
}

/**Изменяемый стиль для кнопки*/
const buttonStyle = computed(() => ({
    width: props.width + "px",
    height: props.height + "px",
    fontSize: props.fontSize + "px",
    fontWeight: props.fontWeight,
    opacity: props.opacity,
}))


</script>

<template>
    <button v-if="type === 'solid'" :class="props.type" :style="buttonStyle" @click="onClick">
        <slot>{{ props.text }}</slot>
    </button>
    <span v-else-if="type === 'text'" :class="props.type" @click="onClick">
        <slot></slot>
    </span>
</template>

<style lang="scss" scoped>
* {
    padding: 5px;
}

.solid {
    border: none;
    border-radius: 2px;
    padding: 3px;
    margin: 0 5px;
    cursor: pointer;
}

.text {
    user-select: none;

    &:hover {
        cursor: pointer;

        color: red;
    }
}
</style>