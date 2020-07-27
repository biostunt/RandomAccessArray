import { IAccess } from './Access';

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
}