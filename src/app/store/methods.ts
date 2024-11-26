export class Methods {
    static getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }

    static getRandomString(strings: string[]) {
        return strings[this.getRandomInt(strings.length)]
    }

    static AlertMessage(message: string) {
        alert(message)
    }
}


