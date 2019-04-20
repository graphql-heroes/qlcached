# LocalStorage compliant Indexed DB storage

## Usage

```js
import { Store } from 'idb-localstorage';

const store = new Store('db-name', 'store-name');  
store.setItem('hello', 'world');
store.setItem('foo', 'bar');
```

> NOTE: All methods return Promise