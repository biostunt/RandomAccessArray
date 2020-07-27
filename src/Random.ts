export default class Random {
    randomFloat(min: number = 0, max: number = 1): number {
        return Math.random() * (max - min) + min;
    }

    randomInt(min: number = 0, max: number = 1): number {
        return Math.floor(this.randomFloat(min, max));
    }

    randomString(dict: string = "1234567890qwertyuiopasdfghjklzxcvbnm", length: number = 10): string {
        return new Array<string>(length).map(i => dict.charAt(this.randomInt(0, dict.length))).join('');
    }
}