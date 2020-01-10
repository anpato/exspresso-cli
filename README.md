# Exspresso

## Installation

> - `npm install -g exspresso-cli` or `yarn add global exspresso-cli`
> - You can also use `npx exspresso-cli init`
> - To start using exspresso-cli run `exspresso-cli init` and follow the prompts

## Features

- Fast and easy [Express JS](https://github.com/expressjs/express) setup.
- Supports MongoDB and [Mongoose](https://github.com/Automattic/mongoose)
- Supports Postgresql using [Sequelize-Cli](https://github.com/sequelize/cli)

### Getting Started

Easily spin up Express servers by selecting your preferred database dialect, currently only supports `mongoDB` and `postgresql`.

Exspresso-cli will create folders and files according to the options selected. Postgresql schema's only support es5 at this time, but you can still select es6 in the options.

The poject folder will be created in your current working directory.

# ChangeLog

- 1/9/2020 - Fixed a bug in Postgres based projects where the controller command would navigate to non existing `src` directory. Updated mongoose based models to use `modelnameModel` naming convention. Made project initialize more efficient using an asynchronous method instead of `once('exit)` call backs.
