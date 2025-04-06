# Description

A simple RESTful API built with Express.js, Prisma, and PostgreSQL to manage products for an imaginary merchandise business. (CRUD operations + filtering products on offer).

## Features

- Get all products
- Get a specific product by ID
- Add a new product
- Update an existing product
- Filter products that are on offer

## Setup and Installation

1. Clone the Repository

   ```bash
   git clone https://github.com/Levis155/products-express-api.git
   ```

1. Configure your database

   Create a .env file and add your PostgreSQL connection URL.

   ```bash
   DATABASE_URL="postgresql://user:password@localhost:5432/dbname?schema=public"
   ```

1. Push the Prisma schema to your database

   ```bash
   npx prisma migrate dev --name migration_name
   ```

1. Install nodemon

   ```bash
   npm i nodemon
   ```

1. Start the server

   ```bash
   nodemon server.js
   ```

1. Start using the API by making requests.

## Usage

Here are request examples you can make in the terminal(you can also opt for API testing tools such as Postman, ThunderClient, Insomnia etc).

- Add a product to your database:

```bash
curl -X POST http://localhost:3000/movies \
  -H "Content-Type: application/json" \
  -d '  {
  "productTitle": "Bluetooth 5.3 Earbuds",
  "productDescription": "ANC, 30hr playtime, IPX5 waterproof",
  "unitsLeft": 18,
  "pricePerUnit": "KSh 6,999"
  }'
```

- Get all products

```bash
curl -X GET http://localhost:3000/products
```

- Get a single product

```bash
curl -X GET http://localhost:3000/products/< productId >
```

- update a movie

```bash
curl -X PUT http://localhost:3000/products/< productId > \
  -H "Content-Type: application/json" \
  -d '{
    "onOffer": true
  }'
```

- Get products on offer

```bash
curl -X GET http://localhost:3000/products/offers
```

- Delete a product

```bash
curl -X DELETE http://localhost:3000/products/ < productId >
```
