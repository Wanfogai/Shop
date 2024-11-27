import Card from "@/components/widget/card/card.vue"
import { CardModel } from "@/components/widget/card/models/CardModel"
import { computed, reactive, ref } from "vue"
import { Methods } from "./methods"
import { BasketItemModel } from "@/components/ui/basket-item/models/BasketItemModel"
import { CardFiler } from "./trash"



//Верменно начало
interface Offer {
    image: string,
}

let products: CardModel[] = []

//Для генирации рандомных карт ()
for (let index = 0; index < 20; index++) {
    const currentCard = Methods.getRandomObject([new CardFiler(require("@/app/assets/images/PC.webp"), "ПК", "Ультра игровой ПК"),
    new CardFiler(require("@/app/assets/images/Processor.webp"), "Процессор", "I53210M"),
    new CardFiler(require("@/app/assets/images/VideoCard.webp"), "Видеокарта", "RTX404090"),
    new CardFiler(require("@/app/assets/images/goviadina.png"), "Мясо", "Говядина")
    ])
    products.push(new CardModel({
        Name: (<CardFiler>currentCard).Name,
        Type: (<CardFiler>currentCard).Type,
        Image: (<CardFiler>currentCard).Image.toString(),
        Exist: Boolean(Methods.getRandomInt(2)),
        Raiting: Methods.getRandomInt(6),
        Price: Methods.getRandomInt(1000),
        Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid omnis placeat labore tempore nostrum eum dicta? Porro voluptatum expedita hic quisquam possimus. Necessitatibus error reprehenderit, quia eos facere deserunt."
    }))

}
//Временно Конец

const useStore = () => {

    const basketMenuActive = ref(false)

    const totalPrice = ref(0)

    const searchString = ref("")

    const basketProducts = ref<BasketItemModel[]>([])

    const offers = ref<Offer[]>([
        { image: "https://cdn.shopify.com/s/files/1/0070/7032/articles/discounts-coupons-offers-types_bea872d4-92b4-4606-8e38-0c8b95ee7ebd.jpg?v=1729518205&originalWidth=1848&originalHeight=782&width=1800" },
        { image: "https://cdn.shopify.com/s/files/1/0016/3866/2201/files/Discount-Coupons-on-Online-Shopping_1024x1024.jpg?v=1667489054" },
        { image: "https://cdn.shopify.com/s/files/1/0070/7032/articles/discounts-coupons-offers-types_bea872d4-92b4-4606-8e38-0c8b95ee7ebd.jpg?v=1729518205&originalWidth=1848&originalHeight=782&width=1800" }
    ])
    return { products, offers, basketMenuActive, basketProducts, totalPrice, searchString }
}

const store = reactive(useStore())
export { store }