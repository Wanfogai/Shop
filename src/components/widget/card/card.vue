<script lang="ts" setup>
import { getCurrentInstance, PropType } from 'vue';
import { IconTypeEnum, UiIcon, ButtonTypeEnum, UiButton, Dragable } from '@/components';
import { CardModel } from './models/CardModel';
import { Methods } from '@/app/store/methods';

const props = defineProps({
    card: { type: Object as PropType<CardModel>, default: () => new CardModel() },
})
/**Действие при клике на кнопку карты */
const onClick = () => { Methods.AlertMessage("Hello Worlld") }

</script>
<template>
    <div class="card_wraper">
        <div class="cardHeader"><img :src="card.Image" class="itemImg"><span class="name">{{ props.card.Name }}</span>
        </div>
        <div class="cardCenter">
            <div class="stars">
                <UiIcon v-for="(index) in 5"
                    :type='index <= card.Raiting ? IconTypeEnum.FullStar : IconTypeEnum.EmptyStar'></UiIcon>
            </div>
            <div class="discription">{{ card.Desc }}</div>
            <div class="storage">
                <span v-if="card.Exist" class="exist"> В наличии</span>
                <span v-else class="noExist"> Нет в наличии</span>
            </div>

            <div class="cardFooter">
                <span>{{ card.Price }} $</span>
                <UiButton :type="ButtonTypeEnum.Solid" :onclick="onClick">Подробнее ||></UiButton>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card_wraper {
    user-select: none;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    border: solid;
    border-width: 1px;
    border-style: dashed;
    border-color: gray;
    background-color: white;
    width: 280px;
    min-height: 530px;
}

.empty {
    background-color: gray;
}

.name {
    font-weight: 550;
}

.stars {
    display: flex;
    justify-content: space-between;
    width: 35%;
}

.cardCenter {
    //background-color: red;
    display: flex;
    flex-direction: column;
    height: auto;
}


.cardCenter .storage .exist {
    padding-top: 20px;
    color: green;
}

.cardCenter .storage .noExist {
    padding-top: 20px;
    color: red;
}

.cardCenter .storage {
    margin-top: 23px;
}

.cardFooter {
    display: flex;
    justify-content: space-between;
    margin-top: 5%;

}

.cardFooter span {
    font-weight: 600;
}

.discription {
    text-overflow: ellipsis;
    overflow: hidden;
    font-weight: 300;
}

.itemImg {
    height: 100%;
    width: 100%;
}

.cardHeader {
    //background-color: white;

    height: 50%;
}
</style>