# Mimas

A moon of saturn 🌚 and a zero config server experiment.

[![Build Status](https://travis-ci.org/jcblw/mimas.svg?branch=master)](https://travis-ci.org/jcblw/mimas)

## The idea

Have a module build a server and require a directory to load all paths and middleware.

eg.
```javascript
const {get} = require('@jcblw/mimas')

get('/', (req, res) => {
  res.end('Hello Mimas')
})
```

I should just be able to throw this into my `./server` directory and `mimas` should know how to run this.

To start this currently do.

```shell
mimas
```

It is perffered you install this module locally and use `npm scripts` to access the bin.

```json
...
"scripts": {
  "start": "mimas"
}
...
```
