export class CardModel {
    constructor(obj?: Partial<CardModel>) {
        if (obj) Object.assign(this, obj)
    }
    Id: number
    Type?: string
    Desc?: string
    Name?: string
    Image?: string
    Exist?: boolean
    Raiting: number
    Price: number
}