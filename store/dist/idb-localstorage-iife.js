var idbLocalStorage = (function (exports) {
'use strict';

class Store {
    constructor(dbName = "graphqlstore", storeName = "keyval") {
        this.storeName = storeName;
        this._dbp = new Promise((resolve, reject) => {
            const openreq = indexedDB.open(dbName, 1);
            openreq.onerror = () => reject(openreq.error);
            openreq.onsuccess = () => resolve(openreq.result);
            // First time setup: create an empty object store
            openreq.onupgradeneeded = () => {
                openreq.result.createObjectStore(storeName);
            };
        });
    }
    _withIDBStore(type, callback) {
        return this._dbp.then(db => new Promise((resolve, reject) => {
            const transaction = db.transaction(this.storeName, type);
            transaction.oncomplete = () => resolve();
            transaction.onabort = transaction.onerror = () => reject(transaction.error);
            callback(transaction.objectStore(this.storeName));
        }));
    }
    getItem(key) {
        let req;
        return this._withIDBStore("readonly", store => {
            req = store.get(key);
        }).then(() => req.result);
    }
    setItem(key, value) {
        return this._withIDBStore("readwrite", store => {
            store.put(value, key);
        });
    }
    removeItem(key) {
        return this._withIDBStore("readwrite", store => {
            store.delete(key);
        });
    }
    clear() {
        return this._withIDBStore("readwrite", store => {
            store.clear();
        });
    }
    keys() {
        const keys = [];
        return this._withIDBStore("readonly", store => {
            // This would be store.getAllKeys(), but it isn't supported by Edge or Safari.
            // And openKeyCursor isn't supported by Safari.
            (store.openKeyCursor || store.openCursor).call(store).onsuccess = function () {
                if (!this.result) {
                    return;
                }
                keys.push(this.result.key);
                this.result.continue();
            };
        }).then(() => keys);
    }
}

exports.Store = Store;

return exports;

}({}));
