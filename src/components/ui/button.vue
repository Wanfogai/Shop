<script lang="ts" setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
//Параметры
const props = defineProps<{
    //Тип кнопки (простая кнопка или текстовая)
    type: "solid" | "text";
}>()



</script>

<template>
    <button v-if="type === 'solid'" :class="props.type">
        <slot></slot>
    </button>
    <span v-else-if="type === 'text'" :class="props.type">
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