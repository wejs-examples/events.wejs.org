# We.js events/conference portal project

> Full featured events portal run in: http://events.wejs.org

**Build With:**

- We.js
- Mysql

# How to install

First install all dependencies listed in: https://wejs.org/docs/we/getstarted.installation

Clone the project

```sh
git clone https://github.com/wejs-examples/events.wejs.org.git
cd events.wejs.org
```

Install **npm** dependencies

```sh
npm install
```
# Commands

##### Run project in development environment:
```sh
npm run dev
```

##### Build production assets and templates:
```sh
npm run build
```

##### Run project in production environment:
```sh
npm run prod
```


## How to configure

Project configuration is set in config/ folder and every file will be parsed and merged in we.config

Example:

For set i18n configuration you can add one file in project config/ folder with:

```js
module.exports.i18n = {
  // Which locales are supported?
  locales: ['en-us'],
  defaultLocale: 'en-us'
};
```
Example: https://github.com/wejs/site/blob/master/config/i18n.js

And will be parsed to we.config.i18n

config/local.js files are loaded after all files and can override other configs

## Test

TODO

## License

under the MIT license.
