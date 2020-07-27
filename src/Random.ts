export default class Random {
    static randomFloat(min: number = 0, max: number = 1): number {
        return Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min);
    }

    static randomInt(min: number = 0, max: number = 1): number {
        return Math.floor(this.randomFloat(min, max));
    }

    static randomString(dict: string = "1234567890qwertyuiopasdfghjklzxcvbnm", length: number = 10): string {
        return new Array<string>(length).map(i => dict.charAt(this.randomInt(0, dict.length))).join('');
    }

    static randomHex(bytes: number = 12): string {
        return this.randomInt(Math.pow(2, Math.floor(bytes / 2)), Math.pow(2, bytes)).toString(16);
    }

    static randomBoolean(): boolean {
        return this.randomInt(0, 1) === 1;
    }
}