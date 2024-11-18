export class CardModel {
    // constructor(desc?: string, image?: string, exist?: boolean, price?: number, raiting?: number) {
    //     this.Desc = desc
    //     this.Image = image
    //     this.Exist = exist || false
    //     this.Price = price
    //     this.Raiting = raiting || 0;
    // }
    constructor(obj?: Partial<CardModel>) {
        if (obj) Object.assign(this, obj)
    }

    Id:Number
    Desc?: string
    Image?: string
    Exist?: boolean
    Raiting: number
    Price?: number
}