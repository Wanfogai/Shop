<script setup lang="ts">
import { ButtonTypeEnum, Container, UiButton } from '@/components';
</script>
<template>
    <Container class="main">
        <h1>Написать в поддержку :</h1>

        <div class="infoContainer">
            <div class="infoPole">
                <h3>Ваша почта :</h3>
                <input></input>
            </div>

            <div class="infoPole">
                <h3>Как к вам обращаться :</h3>
                <input></input>
            </div>
        </div>
        <h3>Сообщение :</h3>
        <textarea></textarea>
        <UiButton :type="ButtonTypeEnum.Solid" width="200" height="50" font-weight="600">Отправить</UiButton>
    </Container>
</template>
<style lang="scss" scoped>
.main {
    display: flex;
    flex-direction: column;
    align-items: center;
}

textarea {
    font-size: x-large;
    resize: none;
    width: 100%;
    height: 50%;
    font-weight: 450;
    margin-bottom: 20px;
}

.infoContainer {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
}

input{
    font-weight: 450;
    padding-left: 5px;
    padding-right: 5px;
    width:250px;
    height: 20px;
    border-radius: 10px;
}

.infoPole {
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>