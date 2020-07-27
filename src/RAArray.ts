import Item from './Item';
import Random from './Random';
import { createAccessConfiguration, IAccess } from './Access';

export default class RAArray {
    // size of array
    size: number = 0;

    // first Item
    head: Item = null;

    // last Item
    tail: Item = null;

    shouldUpdatePermission: boolean;

    init(updatePermissions: boolean): void {
        this.shouldUpdatePermission = updatePermissions;
    }

    constructor(updatePermissions: boolean = true) {
        this.init(updatePermissions);
    }

    getAccessConfig(): IAccess {
        return createAccessConfiguration(Random.randomBoolean(), Random.randomBoolean(), Random.randomBoolean());
    }

    add(value: any): string {
        let item = new Item(value, this.getAccessConfig());
        if (this.size === 0) {
            this.head = item;
            this.tail = item;
        } else {
            item.prev = this.tail;
            this.tail = item;
        }
        return item.hash;
    }

    get(index: number): any {
        if (index > this.size - 1) console.error('index out of range');
        let real_index = Random.randomInt(0, this.size - 1);
        let curr_ind = this.size - 1;
        let curr = this.tail;
        let value = null;
        while (curr.prev !== null) {
            if (curr_ind === real_index)
                value = curr.getValue();
            if (this.shouldUpdatePermission)
                curr.permissions = this.getAccessConfig();
            curr_ind -= 1;
            curr = curr.prev;
        }
        return value;
    }

    update(index: number, value: any): void {
        if (index > this.size - 1) console.error('index out of range');
        let real_index = Random.randomInt(0, this.size - 1);
        let curr_ind = this.size - 1;
        let curr = this.tail;
        while (curr.prev !== null) {
            if (curr_ind === real_index)
                curr.setValue(value);
            if (this.shouldUpdatePermission)
                curr.permissions = this.getAccessConfig();
            curr_ind -= 1;
            curr = curr.prev;
        }
        return value;
    }
}