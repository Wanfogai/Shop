import { CardModel } from "@/components/widget/card/models/CardModel"
import { computed, reactive, ref } from "vue"

interface Offer {
    id: number,
    image: string,
}

const useStore = () => {

    const offers = ref<Offer[]>([
        {
            id: 0,
            image: "https://cdn.shopify.com/s/files/1/0070/7032/articles/discounts-coupons-offers-types_bea872d4-92b4-4606-8e38-0c8b95ee7ebd.jpg?v=1729518205&originalWidth=1848&originalHeight=782&width=1800"
        },
        {
            id: 1,
            image: "https://cdn.shopify.com/s/files/1/0016/3866/2201/files/Discount-Coupons-on-Online-Shopping_1024x1024.jpg?v=1667489054"
        }
    ])


    const products = ref([
        new CardModel("Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid omnis placeat labore tempore nostrum eum dicta? Porro voluptatum expedita hic quisquam possimus. Necessitatibus error reprehenderit, quia eos facere deserunt.", "https://content.ibuypower.com/Images/Components/27650/gaming-pc-01-Slate8Mesh-main-2400-solo.png", false, 22, 2),
        new CardModel("Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid omnis placeat labore tempore nostrum eum dicta? Porro voluptatum expedita hic quisquam possimus. Necessitatibus error reprehenderit, quia eos facere deserunt.", "https://content.ibuypower.com/Images/Components/27650/gaming-pc-01-Slate8Mesh-main-2400-solo.png", false, 2000, 5),
        new CardModel("Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid omnis placeat labore tempore nostrum eum dicta? Porro voluptatum expedita hic quisquam possimus. Necessitatibus error reprehenderit, quia eos facere deserunt.", "https://content.ibuypower.com/Images/Components/27650/gaming-pc-01-Slate8Mesh-main-2400-solo.png", false, 2000, 5),
        new CardModel("Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid omnis placeat labore tempore nostrum eum dicta? Porro voluptatum expedita hic quisquam possimus. Necessitatibus error reprehenderit, quia eos facere deserunt.", "https://content.ibuypower.com/Images/Components/27650/gaming-pc-01-Slate8Mesh-main-2400-solo.png", false, 2000, 5),
        new CardModel("Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid omnis placeat labore tempore nostrum eum dicta? Porro voluptatum expedita hic quisquam possimus. Necessitatibus error reprehenderit, quia eos facere deserunt.", "https://content.ibuypower.com/Images/Components/27650/gaming-pc-01-Slate8Mesh-main-2400-solo.png", false, 2000, 3),
        new CardModel("Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid omnis placeat labore tempore nostrum eum dicta? Porro voluptatum expedita hic quisquam possimus. Necessitatibus error reprehenderit, quia eos facere deserunt.", "https://content.ibuypower.com/Images/Components/27650/gaming-pc-01-Slate8Mesh-main-2400-solo.png", false, 2000, 5),
        new CardModel("Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid omnis placeat labore tempore nostrum eum dicta? Porro voluptatum expedita hic quisquam possimus. Necessitatibus error reprehenderit, quia eos facere deserunt.", "https://content.ibuypower.com/Images/Components/27650/gaming-pc-01-Slate8Mesh-main-2400-solo.png", false, 2000, 5),
        new CardModel("Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid omnis placeat labore tempore nostrum eum dicta? Porro voluptatum expedita hic quisquam possimus. Necessitatibus error reprehenderit, quia eos facere deserunt.", "https://content.ibuypower.com/Images/Components/27650/gaming-pc-01-Slate8Mesh-main-2400-solo.png", false, 2000, 5),
        new CardModel("Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid omnis placeat labore tempore nostrum eum dicta? Porro voluptatum expedita hic quisquam possimus. Necessitatibus error reprehenderit, quia eos facere deserunt.", "https://content.ibuypower.com/Images/Components/27650/gaming-pc-01-Slate8Mesh-main-2400-solo.png", true, 2000, 5),
        new CardModel("Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid omnis placeat labore tempore nostrum eum dicta? Porro voluptatum expedita hic quisquam possimus. Necessitatibus error reprehenderit, quia eos facere deserunt.", "https://content.ibuypower.com/Images/Components/27650/gaming-pc-01-Slate8Mesh-main-2400-solo.png", false, 2000, 2),
        new CardModel("Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid omnis placeat labore tempore nostrum eum dicta? Porro voluptatum expedita hic quisquam possimus. Necessitatibus error reprehenderit, quia eos facere deserunt.", "https://content.ibuypower.com/Images/Components/27650/gaming-pc-01-Slate8Mesh-main-2400-solo.png", false, 2000, 5),
        new CardModel("Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid omnis placeat labore tempore nostrum eum dicta? Porro voluptatum expedita hic quisquam possimus. Necessitatibus error reprehenderit, quia eos facere deserunt.", "https://content.ibuypower.com/Images/Components/27650/gaming-pc-01-Slate8Mesh-main-2400-solo.png", false, 2000, 5),
        new CardModel("Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid omnis placeat labore tempore nostrum eum dicta? Porro voluptatum expedita hic quisquam possimus. Necessitatibus error reprehenderit, quia eos facere deserunt.", "https://content.ibuypower.com/Images/Components/27650/gaming-pc-01-Slate8Mesh-main-2400-solo.png", true, 2000, 5),
        new CardModel("Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid omnis placeat labore tempore nostrum eum dicta? Porro voluptatum expedita hic quisquam possimus. Necessitatibus error reprehenderit, quia eos facere deserunt.", "https://content.ibuypower.com/Images/Components/27650/gaming-pc-01-Slate8Mesh-main-2400-solo.png", false, 2000, 5),
        new CardModel("Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid omnis placeat labore tempore nostrum eum dicta? Porro voluptatum expedita hic quisquam possimus. Necessitatibus error reprehenderit, quia eos facere deserunt.", "https://content.ibuypower.com/Images/Components/27650/gaming-pc-01-Slate8Mesh-main-2400-solo.png", false, 2000, 5),
        new CardModel("Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid omnis placeat labore tempore nostrum eum dicta? Porro voluptatum expedita hic quisquam possimus. Necessitatibus error reprehenderit, quia eos facere deserunt.", "https://content.ibuypower.com/Images/Components/27650/gaming-pc-01-Slate8Mesh-main-2400-solo.png", true, 2, 1),
        new CardModel("Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid omnis placeat labore tempore nostrum eum dicta? Porro voluptatum expedita hic quisquam possimus. Necessitatibus error reprehenderit, quia eos facere deserunt.", "https://content.ibuypower.com/Images/Components/27650/gaming-pc-01-Slate8Mesh-main-2400-solo.png", false, 2000, 5),
        new CardModel("Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid omnis placeat labore tempore nostrum eum dicta? Porro voluptatum expedita hic quisquam possimus. Necessitatibus error reprehenderit, quia eos facere deserunt.", "https://content.ibuypower.com/Images/Components/27650/gaming-pc-01-Slate8Mesh-main-2400-solo.png", false, 2000, 5),
        new CardModel("Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid omnis placeat labore tempore nostrum eum dicta? Porro voluptatum expedita hic quisquam possimus. Necessitatibus error reprehenderit, quia eos facere deserunt.", "https://content.ibuypower.com/Images/Components/27650/gaming-pc-01-Slate8Mesh-main-2400-solo.png", false, 2000, 5),
        new CardModel("Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid omnis placeat labore tempore nostrum eum dicta? Porro voluptatum expedita hic quisquam possimus. Necessitatibus error reprehenderit, quia eos facere deserunt.", "https://content.ibuypower.com/Images/Components/27650/gaming-pc-01-Slate8Mesh-main-2400-solo.png", false, 2000, 2),
        new CardModel("Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid omnis placeat labore tempore nostrum eum dicta? Porro voluptatum expedita hic quisquam possimus. Necessitatibus error reprehenderit, quia eos facere deserunt.", "https://content.ibuypower.com/Images/Components/27650/gaming-pc-01-Slate8Mesh-main-2400-solo.png", false, 2000, 5),
        new CardModel("Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid omnis placeat labore tempore nostrum eum dicta? Porro voluptatum expedita hic quisquam possimus. Necessitatibus error reprehenderit, quia eos facere deserunt.", "https://content.ibuypower.com/Images/Components/27650/gaming-pc-01-Slate8Mesh-main-2400-solo.png", true, 2000, 5),
        new CardModel("Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid omnis placeat labore tempore nostrum eum dicta? Porro voluptatum expedita hic quisquam possimus. Necessitatibus error reprehenderit, quia eos facere deserunt.", "https://content.ibuypower.com/Images/Components/27650/gaming-pc-01-Slate8Mesh-main-2400-solo.png", false, 10, 1),
        new CardModel("Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid omnis placeat labore tempore nostrum eum dicta? Porro voluptatum expedita hic quisquam possimus. Necessitatibus error reprehenderit, quia eos facere deserunt.", "https://content.ibuypower.com/Images/Components/27650/gaming-pc-01-Slate8Mesh-main-2400-solo.png", false, 2000, 5),
        new CardModel("Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid omnis placeat labore tempore nostrum eum dicta? Porro voluptatum expedita hic quisquam possimus. Necessitatibus error reprehenderit, quia eos facere deserunt.", "https://content.ibuypower.com/Images/Components/27650/gaming-pc-01-Slate8Mesh-main-2400-solo.png", true, 2000, 5),
        new CardModel("Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid omnis placeat labore tempore nostrum eum dicta? Porro voluptatum expedita hic quisquam possimus. Necessitatibus error reprehenderit, quia eos facere deserunt.", "https://content.ibuypower.com/Images/Components/27650/gaming-pc-01-Slate8Mesh-main-2400-solo.png", false, 500, 5),
        new CardModel("Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid omnis placeat labore tempore nostrum eum dicta? Porro voluptatum expedita hic quisquam possimus. Necessitatibus error reprehenderit, quia eos facere deserunt.", "https://content.ibuypower.com/Images/Components/27650/gaming-pc-01-Slate8Mesh-main-2400-solo.png", false, 2000, 3),
        new CardModel("Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid omnis placeat labore tempore nostrum eum dicta? Porro voluptatum expedita hic quisquam possimus. Necessitatibus error reprehenderit, quia eos facere deserunt.", "https://content.ibuypower.com/Images/Components/27650/gaming-pc-01-Slate8Mesh-main-2400-solo.png", true, 2000, 5),
        new CardModel("Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid omnis placeat labore tempore nostrum eum dicta? Porro voluptatum expedita hic quisquam possimus. Necessitatibus error reprehenderit, quia eos facere deserunt.", "https://content.ibuypower.com/Images/Components/27650/gaming-pc-01-Slate8Mesh-main-2400-solo.png", false, 2000, 5),
        new CardModel("Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid omnis placeat labore tempore nostrum eum dicta? Porro voluptatum expedita hic quisquam possimus. Necessitatibus error reprehenderit, quia eos facere deserunt.", "https://content.ibuypower.com/Images/Components/27650/gaming-pc-01-Slate8Mesh-main-2400-solo.png", false, 2000, 5),

    ]
    )

    return { products, offers }
}

const store = reactive(useStore())
export { store }