export declare class Store {
    readonly storeName: string;
    readonly _dbp: Promise<IDBDatabase>;
    constructor(dbName?: string, storeName?: string);
    _withIDBStore(type: IDBTransactionMode, callback: ((store: IDBObjectStore) => void)): Promise<void>;
    getItem<Type>(key: IDBValidKey): Promise<Type>;
    setItem(key: IDBValidKey, value: any): Promise<void>;
    removeItem(key: IDBValidKey): Promise<void>;
    clear(): Promise<void>;
    keys(): Promise<IDBValidKey[]>;
}
