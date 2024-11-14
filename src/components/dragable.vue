<script setup lang="ts">
const emit = defineEmits({
    drag:[MouseEvent]
})
</script>

<template>
    <div class="container" @drag="">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped></style>