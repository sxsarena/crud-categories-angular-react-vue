# Challenge

[![licence mit](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](http://hemersonvianna.mit-license.org/)
[![issues](https://img.shields.io/github/issues/descco-arena/crud-categories-angular-react-vue.svg?style=flat-square)](https://github.com/descco-arena/crud-categories-angular-react-vue/issues)

## Resources

- Node.js
- Express.js
- MongoDB
- Mongoose
- Angular
- SASS (*.scss)

## Prerequisites

- [Node >= v6.9.2](https://nodejs.org/en/)
- NPM >= v3.10.8
- [Yarn >= v0.21.3](https://yarnpkg.com/en/docs/install#linux-tab) or `npm install -g yarn`
- [MongoDB](https://www.mongodb.com/download-center#community)

## Install

```
yarn
```

## Usage

MongoDB must be running on port 27017

```
mongod
```

The next step is to import the database

``` 
mongoimport --db challenge  --collection categories --file database/categories.json
```

Start the application

```
yarn start
```

* Server running on http://localhost:3000
* Access http://localhost:3000/angular

## API

- **GET** - find all - `http://localhost:3000/api/categories`

- **POST** - Add - `http://localhost:3000/api/categories`
    - Ex. for Postman { "label": "test", "url": "#/test" }


- **GET** - find by id - `http://localhost:3000/api/categories/:id`

- **PUT** - udpate - `http://localhost:3000/api/categories/:id`

- **DELETE** - delete - `http://localhost:3000/api/categories/:id`


## Tests

```
yarn test:server
```

## Contributing

- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -m 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request

## Log

Check [Releases](https://github.com/descco-arena/crud-categories-angular-react-vue/releases) for detailed changelog.

## License

[MIT license](http://hemersonvianna.mit-license.org/) © Hemerson Vianna
