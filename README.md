# We.js events/conference portal project

> Full featured events portal run in: http://events.wejs.org

**Build With:**

- We.js

# How to install

First install all dependencies listed in: https://wejs.org/docs/we/getstarted.installation

Clone the project

```sh
git clone https://github.com/wejs-examples/events.wejs.org.git
cd events.wejs.org
```

Configure the database:

Copy config/local.example to config/local.js and configure your database.

If you use postgresql you need to install postgresql database, see https://wejs.org/docs/we/database

Install **npm** dependencies

```sh
we install
```
# Commands

##### Run project in development environment:
```sh
we run
```

##### Build production assets and templates:
```sh
npm run build
```

##### Run project in production environment:
```sh
we run --prod
```

## Changing locale

To change the default locale to English open config/i18n.js and uncomment the lines for en-us and comment out the lines for pt-br.

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

TODO, Looking for contributors!

## License

under the MIT license.
