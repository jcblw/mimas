# Mimas

A moon of saturn 🌚 and a zero config server experiment.

## The idea

Have a module build a server and require a directory to load all paths and middleware.

> warning: this is very super experimental

eg.
```javascript
const {get} = require('@jsblw/mimas')

get('/', (req, res) => {
  res.end('Hello Mimas')
})
```

I should just be able to throw this into my `./server` directory and `mimas` should know how to run this.

To start this currently do.

```shell
node -r @jsblw/mimas index.js
```
