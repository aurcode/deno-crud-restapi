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

## Run by URL
```
docker build -t app .
docker run -it --init -p 3000:3000 app
```

# Endpoints

Get All users
```
GET      /books
```

Get a single User by Id
```
GET      /books/:id
```

Create a new User
```
POST     /books/new
```

Update an existing User by Id
```
PUT      /books/:id
```

Delete an existing User by Id
```
DELETE   /books/:id
```
