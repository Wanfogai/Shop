<script lang="ts" setup>
import { UiIcon, UiButton } from '..';

const props = defineProps<{
    desc: string,
    image: string,
    exist: boolean,
    raiting: number
    price: number
}>()

</script>
<template>
    <div class="cardBody">
        <div class="cardHeader"><img :src="props.image" class="itemImg">
        </div>
        <div class="cardCenter">
            <div class="stars">
                    <UiIcon v-for="(item, index) in 5" :type='index < props.raiting ? "enStar" : "disStar"'></UiIcon>
            </div>
            <div class="discription">{{ props.desc }}</div>
            <div class="storage">
                <span v-if="props.exist" class="exist"> В наличии</span>
                <span v-else class="noExist"> Нет в наличии</span>
            </div>

            <div class="cardFooter">
                <span>{{ props.price }} $</span>
                <UiButton type="solid">Подробнее ||></UiButton>
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