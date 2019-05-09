# LocalStorage compliant Indexed DB storage

## Usage

```js
import { Store } from 'idb-localstorage';

const store = new Store('db-name', 'store-name');  
store.setItem('hello', 'world');
store.setItem('foo', 'bar');
```

> NOTE: All methods return Promise

### API

### get:

```js

// logs: "world"
store.getItem('hello').then(val => console.log(val));
```

If there is no 'hello' key, then `val` will be `undefined`.

### keys:

```js
import { keys } from 'idb-keyval';

// logs: ["hello", "foo"]
store.keys().then(keys => console.log(keys));
```

### del:

```js
import { del } from 'idb-keyval';

store.removeItem('hello');
```

### clear:

```js
import { clear } from 'idb-keyval';

store.clear();
```
