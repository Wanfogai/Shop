<script lang="ts" setup>
import { PropType } from 'vue';
import { UiIcon } from '../..';
import { CardModel } from './models/CardModel';
import { ButtonTypeEnum, UiButton } from '../../ui/ui-button'

const props = defineProps({
    card: { type: Object as PropType<CardModel>, default: () => new CardModel() }
})

</script>
<template>
    <div class="cardBody">
        <div class="cardHeader"><img :src="card.Image" class="itemImg">
        </div>
        <div class="cardCenter">
            <div class="stars">
                <UiIcon v-for="(, index) in 5" :type='index < card.Raiting? "enStar" : "disStar"'></UiIcon>
            </div>
            <div class="discription">{{ card.Desc }}</div>
            <div class="storage">
                <span v-if="card.Exist" class="exist"> В наличии</span>
                <span v-else class="noExist"> Нет в наличии</span>
            </div>

            <div class="cardFooter">
                <span>{{ card.Price }} $</span>
                <UiButton :type="ButtonTypeEnum.Solid">Подробнее ||></UiButton>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.cardBody {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    border: solid;
    border-width: 2px;
    border-color: gray;
    margin: 0.5% 0 1% 0;
    background-color: white;
    width: 280px;
    max-height: 250rem;
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