# Exspresso

## Installation

> - `npm install -g exspresso-cli` or `npx exspresso-cli init`
> - To start using exspresso-cli run `npx exspresso-cli init` if you do not have it installed globally or `exspresso-cli init` and follow the prompts.

## Features

- Fast and easy [Express JS](https://github.com/expressjs/express) setup.
- Supports MongoDB and [Mongoose](https://github.com/Automattic/mongoose)
- Supports Postgresql using [Sequelize-Cli](https://github.com/sequelize/cli)

# Getting Started

Easily spin up Express servers by selecting your preferred database dialect, currently only supports `mongoDB` and `postgresql`.

Exspresso-cli will create folders and files according to the options selected. Postgresql schema's only support es5 at this time, but you can still select es6 in the options.

The poject folder will be created in your current working directory.

## Commands

### Help

You can use the `npx exspresso-cli --help` command to view available commands.

### Generating Controllers

```sh
npx exspresso-cli -c <ControllerName>
```

Running the above command will generate a controller file with the `Controller Name` parameter. Methods are already provided for basic queries, but you can add your own.

### Generating Models (MongoDB Only)

```sh
npx exspresso-cli -m <ModelName> key:datatype,anotherKey:datatype
```

Using the `-m` will allow you to generate a model file. Ideally the `<ModelName>` should be singular.

Example:

```sh
npx exspresso-cli -m User key:datatype,anotherKey:datatype
```

The datatypes are all mongoose datatypes and follow the same naming convention such as `String`. The key's and datatypes are interpreted as comma seperated `key:value` pairs.

## For Postgres

You can generate models using the `sequelize-cli` commands. There was no need to abstract another layer over the existing commands.

Controllers can be generated for a Postgres build using the controller command.

# Contribution Guidlines

To contribute to this project read [Here](docs/Contribution.md)

# ChangeLog

- 1/9/2020 - Fixed a bug in Postgres based projects where the controller command would navigate to non existing `src` directory. Updated mongoose based models to use `modelnameModel` naming convention. Made project initialize more efficient using an asynchronous method instead of `once('exit)` call backs.
