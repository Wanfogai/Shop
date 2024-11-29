<script lang="ts" setup>
import { computed, onBeforeUnmount, onMounted, PropType, ref } from 'vue';
import { ButtonTypeEnum } from './enums';
import Dragable from '../dragable.vue';

const props = defineProps({
    type: { type: String as PropType<ButtonTypeEnum> },
    routeTo: { type: String, default: '#' },
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

    <button v-if="type === ButtonTypeEnum.Solid" :class="props.type" :style="buttonStyle" @click="onClick">
        <slot>{{ props.text }}</slot>
    </button>
    <span v-else-if="type === ButtonTypeEnum.Text" :class="props.type" @click="onClick">
        <slot></slot>
    </span>
    <RouterLink v-else-if="type == ButtonTypeEnum.RoutSolid" :to="routeTo" class="rout">
        <button :class="props.type" :style="buttonStyle" v-bind="$attrs" @click="onClick">
            <slot>{{ props.text }}</slot>
        </button>
    </RouterLink>
    <RouterLink v-else-if="type == ButtonTypeEnum.RoutText" :to="routeTo" class="rout">
        <span :class="props.type" v-bind="$attrs" @click="onClick">
            <slot></slot>
        </span>
    </RouterLink>
</template>

<style lang="scss" scoped>
* {
    padding: 5px;
}

.solid {
    user-select: none;
    border: none;
    border-radius: 2px;
    padding: 3px;
    margin: 0 5px;
    cursor: pointer;
}

.routSolid {
    user-select: none;
    border: none;
    border-radius: 2px;
    padding: 3px;
    margin: 0 5px;
    cursor: pointer;
}

.routText {
    user-select: none;

    &:hover {
        cursor: pointer;

        color: red;
    }
}

.text {
    user-select: none;

    &:hover {
        cursor: pointer;

        color: red;
    }
}
</style>
<style lang="scss">
.rout {
    text-decoration: none;
    color: black;
}
</style>