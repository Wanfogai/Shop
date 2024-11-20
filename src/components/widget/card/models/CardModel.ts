export class CardModel {
    constructor(obj?: Partial<CardModel>) {
        if (obj) Object.assign(this, obj)
    }
    Desc?: string
    Image?: string
    Exist?: boolean
    Raiting: number
    Price?: number
}