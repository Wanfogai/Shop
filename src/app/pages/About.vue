<script setup lang="ts">
import { Container } from '@/components';
</script>

<template>
    <div>
        <Container class="main">
            <h1>О нас :</h1>
            <div class="infoBlock">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias fuga et atque error dolor id praesentium dicta! Eligendi dicta dolor molestiae pariatur doloremque in! Quo impedit animi deserunt alias molestiae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore in ratione ipsa, asperiores illo deserunt dolorem consequuntur voluptate possimus itaque architecto sapiente corporis numquam, exercitationem eaque. Facere error molestias doloribus.
            </div>
        </Container>
    </div>
</template>

<style lang="scss" scoped>
.main{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
}

.infoBlock{
    font-size: xx-large;
    width: 80%;
    height: auto;
    margin-bottom: 20px;
    background: rgba(196, 196, 196, 0.4);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    padding: 20px;
}
</style>