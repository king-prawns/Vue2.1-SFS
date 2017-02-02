# Vue2.1-SFS
Vue 2.1 project - Start from scratch

## Installation
- Install Node.js

Go to [Node website](https://nodejs.org/en/)

- Install [vue-cli](https://github.com/vuejs/vue-cli)

A simple CLI for scaffolding Vue.js projects
```
$ npm install -g vue-cli
```

- Install [json-server](https://github.com/typicode/json-server)

Full fake REST API
```
$ npm install -g json-server
```
## Usage

- Clone or Download the project

- Install dependencies
```
$ cd my-project
$ npm install
```

- Open first command prompt

a) for dev build
```
$ cd my-project
$ npm run dev
```

b) for prod build

```
$ cd my-project
$ npm run build
```

Install [http-server](https://github.com/indexzero/http-server)

A command-line http server
```
$ npm install -g http-server
```
then 

```
$ cd my-project\dist
http-server
```

- Open second command prompt
```
$ cd my-project\fake_db
$ json-server --watch db.json
```

- Go to [localhost](http://localhost:8080/)

## Features

- single file components (.vue)
- include 3rd-party JS library
- [Webpack](https://webpack.github.io/)
- [Normalize.css](https://necolas.github.io/normalize.css/)
- [Bootstrap](http://getbootstrap.com/)
- [Vue Loader](https://github.com/vuejs/vue-loader)
- [Vue Resource](https://github.com/vuejs/vue-resource)
- [Vue Router](https://github.com/vuejs/vue-router)
- [Vue i18n](https://github.com/kazupon/vue-i18n)
- [Favicons Webpack Plugin](https://github.com/jantimon/favicons-webpack-plugin)
- [NProgress](https://github.com/rstacruz/nprogress)
- NO unit/integration test has been developed

## Conclusion

This is just a simple example, I hope this will help you to understand better Vue 2.
