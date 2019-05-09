# QLCached

![](https://i.imgur.com/jsL955L.png)

Framework for building dynamic, fully configurable GraphQL cache storage.

## Usage

```javascript
import { QLCache } from 'apollo-qlcached';
import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';

const cache = new QLCache({ splitMetadata: true });

const client = new ApolloClient({
  link: new HttpLink(),
  cache
});
```
