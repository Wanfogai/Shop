<script setup lang="ts">
import { Container } from '@/components';
</script>

<template>
    <div>
        <Container>
            {{ $route.fullPath }}
        </Container>
    </div>
</template>