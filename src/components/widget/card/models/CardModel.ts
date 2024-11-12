export class CardModel {
    constructor(desc?: string, image?: string, exist?: boolean, price?: number, raiting: number) {
        this.Desc = desc
        this.Image = image
        this.Exist = exist||false
        this.Price = price
        this.Raiting = raiting;
    }

    
    Desc?: string
    Image?: string
    Exist?: boolean
    Raiting: number=0
    Price?: number
}