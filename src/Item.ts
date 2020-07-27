import { IAccess } from './Access';
import Random from './Random';

export default class Item {
    // Item identifier
    hash: string;

    // Item permissions
    permissions: IAccess = {
        READ: false,
        WRITE: false,
        EXECUTE: false
    };
    throwError(action: string): void {
        console.error(`Item with hash: ${this.hash}. Message: permission denied. Action: ${action}`);
    }

    //Previous Item element 
    prev: Item = null;

    // Item content
    value: any = null;

    constructor(value: any, permissions: IAccess) {
        this.hash = Random.randomHex();
        this.permissions = permissions;
        this.value = value;
    }

    getValue() {
        if (this.permissions.READ)
            return this.value;
        else
            this.throwError('READ');
    }
    setValue(value: any) {
        if (this.permissions.WRITE)
            this.value = value;
        else
            this.throwError('WRITE');
    }

}