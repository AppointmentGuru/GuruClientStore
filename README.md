# guruclientstore

> A Vuex store for AppointmentGuru apps for clients

## Installation

```
npm install --save git+ssh://git@github.com/AppointmentGuru/GuruClientStore.git#master
```

**Use as a plugin**
```
import GuruPlugin from 'guruclientstore/src/store/plugin'
Vue.use(GuruPlugin)

```

* now you can access the store with `this.$gurustore`

# Developers:

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
