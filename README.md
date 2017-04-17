# Olx

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
