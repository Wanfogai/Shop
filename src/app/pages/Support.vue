<script setup lang="ts">
import { Container } from '@/components';
</script>
<template>
    <Container>
        {{ $route.fullPath }}
    </Container>
</template>
<style lang="scss" scoped></style>