export class CardFiler {
    constructor(image: NodeRequire, type: string, name: string) {
        this.Image = image;
        this.Type = type
        this.Name = name;
    }
    Image: NodeRequire
    Type: string
    Name: string
}