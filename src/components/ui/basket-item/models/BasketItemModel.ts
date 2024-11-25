export class BasketItemModel {
    constructor(obj?: Partial<BasketItemModel>) {
        if (obj) Object.assign(this, obj)
    }
    Type?: string
    Name: string
    Price: number

}