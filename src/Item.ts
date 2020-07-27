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

    //Previous Item element 
    prev: Item = null;

    // Item content
    value: any = null;

    constructor(value: any, permissions: IAccess) {
        this.hash = Random.randomHex();
        this.permissions = permissions;
        this.value = value;
    }

}