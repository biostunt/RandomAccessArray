
// Access configuration interface for Items
// @see Item
export interface IAccess {
    READ: boolean;
    WRITE: boolean;
    EXECUTE: boolean;
}

export function createAccessConfiguration(READ: boolean = false, WRITE: boolean = false, EXECUTE: boolean = false): IAccess {
    return { READ, WRITE, EXECUTE };
}

export const AccessType = {
    R: 4,
    W: 2,
    X: 1
}