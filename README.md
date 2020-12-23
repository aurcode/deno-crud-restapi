# Deno REST API
A simple CRUD REST API example using Deno and Oak

## Run Locally
```
deno run --allow-net index.ts
```

## Run by URL
```
deno run --allow-net https://raw.githubusercontent.com/aurcode/deno-oak-crud-restapi/main/index.ts
```

## Run by DOCKER
```
docker build -t app .
docker run -it --init -p 3000:3000 app
```

# Endpoints

Get All books
```
GET      /books
```

Get a single Book by Id
```
GET      /books/:id
```

Create a new Book
```
POST     /books/new
```

Update an existing Book by Id
```
PUT      /books/:id
```

Delete an existing Book by Id
```
DELETE   /books/:id
```
