# **Learning Courses:** :books::brain:

## This is the ***GitHub Finder Project*** with **REACT.JS**, **Tailwind** and **Daisy UI**: :mortar_board::closed_book::robot:

***

- ## **SUMÁRIO:** :round_pushpin:

    1. [Create Next.js app](./1-intro/)

***

## **NODE.JS**

### **What is?**

- JavaScript Runtime (NOT a language of framework)
  - allows us to being able to run JavaScript on the backend
- Built on the V8 JavaScript engine (same as Google Chrome)
- Written in C++

### **How it works?**

- Event-driven
- Non-blocking I/O model: requests, json, etc.
  - Doens't go well with cpu model: calculations, etc.

### **Create Server repository**

- ```npm init```
- ```npm install -D```
  - to install nodemon on all environments
- ```npm install --save-dev nodemon```
  - to install nodemon only on development environment

### **Folder structure**

- server.js: javascript server code
  - deffault code:

  ```javascript
  const http = require('http');

    const server = http.createServer((req, res) => {
        res.setHeader('Content-Type', 'text/html');
        res.setHeader('X-Powered-By', 'Node.js')
        res.write('<h1>Hello wolrd!!!</h1>');
        res.write('<h2>Hello again!!!</h2>');
        res.end();
    });

    const PORT = 5000;

    server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  ```

- package.json: environment run scripts and configs
  - gotta change start to ```nodemon server.js```
- package-lock.json: something-else
- node_modules: dependencies

## **HTTP STATUS CODE**

### 1XX - Informational

### 2XX - Success
  
- 200: Success
- 201: Created
- 204: No Content

### 3XXX - Redirection

- 304: Not Modified

### 4XX - Client Error

- 400: Bad Request
- 401: Unauthorized
- 404: Not Found

### 5XX - Server Error

- 500: Internal Server Error

[**To check on all Status code**](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) :link:

## **HTTP REQUEST METHODS**

### **GET**

Retrieve Resource

### **POST**

Submit Resource

### **PUT/PATCH**

Update Resource

### **DELETE**

Delete/Destroy Resource

[**To check on all methods**](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) :link:

## **RESTFUL API STANDARDS**

### **GETs**

- GET/todos - get all todos
- GET/todos/1 - get todo with ID of 1
- POST/ - add a todo
- PUT/todos/1 - update todo with ID of 1
- DELETE/todos/1 - delete todo with ID of 1

##  **ENVIRONMENT**

### Dotenv

- run: ```npm i express dotenv```

- run: ```npm install -g win-node-env```

- change in package.json ```"start": "NODE_ENV=production node server",``` to, when running start, sets the NODE_ENV to production and than runs node server.

- create file: create config/ folder and then, create a config.env file

- basic default settings:

```dotenv
NODE_ENV=development
PORT=5000
```

## **Express Server**

- deffault code:

```javascript
// Instances of vars and objs
const express = require('express');
const dotenv = require('dotenv')

// Load env vars
dotenv.config({ path: './config/config.env' });

// initiating our express server
const app = express ();

// setting port
const PORT = process.env.PORT || 5000;

// starting server code
app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
```

### **Creating Routes with Express**

- you could on your main file: ```app.get(<route>, function)```
- example: 

```javascript
  app.get('/', (req, res) => {
    // res.send(`Hello from express`)} // it'll read as html
    // res.json({name: 'Dan'}) // it'll read as a json
    // res.sendStatus(400) // to send a status code
    res.status(400).json({success: 'false', data: 'Enter correct e-mail.'}) // send status code and json
  );
```

- it's a convention to create a routes/ folder and a file for each entity, to set our routes.
  1. got to instantiate a express and router, and use the router
  2. got to import the file
  3. got to link a route with the file with app.use()
      - as we do that, we don't need to write extensively our route in our file, just the end of it

### **Controller with express**

1. a lot more of codes goes into the request, so, to organize it, we create a folder controllers/ with files for each route.
2. and then we'll be creating methods, so that each method will be associated with each route.
    - each method got to be exported using exports.
3. we got to import with require() our controller and we'll be using descructuring
    - it's a good practice to, before the method, give a description (we use @desc) and explicite the route associated with it (we use @route) and the access (@access)
4. than we can use our controllers to each route

### **Middleware**

- functions that have access to the (res, req) request<->response cicle.
  - all functions takes (req, res, next)
  - we can set variables to the parameters that we can access in any routes that come after this middleware.
  - at the end of every middleware function we need to call next().
    - it needs that so that it can know that it has to move to next piece of middleware of the cicle
- we need to link it in our server main file with app.use().
- in our req and res parameters we already have a bunch of {} that we can use, so for example we can create on our app.js a logger middleware so that we console.log some information in all our routes

```javascript
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.protocall}://${req.get('host')}${req.originalUrl}`)
}
```

- some library has it's on types of middleware (like mongos that'll be using afterwards).

- to create our own custom middleware:
  1. we'll create a folder called midleware
  2. wright the function
  3. export it
  4. import it in our main server file
  5. Mount it in there with app.use()

- we'll use the mongoDb middleware: morgan
  1. code: ````npm i morgan```
  2. import it on the main server

## **POSTMAN: Creating Environment**

### **Create Environments and Variables**

1. Create environment (click on the eye icon on the top right)
2. Create variables, if needed (easy to change)
    - URL: http://localhost:5000
    - to use it, we use {{}}
3. Choose created variable

### **Create Collections**

1. Go over to Collections tab -> click New Collection
2. Give it a title
3. Can add description for documentation
4. left click, create folder (for each route), give title and description

### **Add request to Collection**

1. 'Save as' the request you're working on
2. Give it a name and desc
3. Choose Collection
4. Choose Folder

## **MONGO DB**

### **Create An Account and Free instance**

- [Link](https://www.mongodb.com)

- Create user and password (paste it on your config.env)

- Use your IP adress so that only you can use it

### **Download Compass**

- Compass is a free interactive tool for querying, optimizing, and analyzing your MongoDB data. Get key insights, drag and drop to build pipelines, and more.

- in the mongodb website in the products tab you can find Compass to download.

### **Connect Instance to Compass**

- go to your Instance page on web, click on Connect, then Compass

- check the option that you already have Compass, then copy the link and paste it on your desktop Compass application

## **MONGOOSE**

- an abstraction layer so that objects in node can interact with our database in mongo

### **installing it**

```npm i mongoose```

### **Creating a connection in node**

1. Create a file called db.js inside config folder
2. import and create connection at main server file

### **Create global handler for promise rejection (async funcs)**

1. transform your app.listen(...) into a const so that we can close and stop the server if we get a unhandled rejection from db
2. add a event handler for unhandled rejections above it

### **Models folder: Inserting data**

- used to validate fields that will be inserted on our database (if in our schema doesn't have a field sent in the request, it won't use it)
- _id -> is a object on mongoDB created automatically

1. Create new folder called models with file of model (starts with uppercase)
2. on the new file, first thing is to instantiate the mongoose variable
3. then, create a schema with an object of all the fields we want along with validation 
4. export it
5. import inside your controller so that we can be able to fetch data

### **Controllers: Create basic CRUD**

- as we are using mongoose, we won't need to create our models methods and atributes because the package already gives us that

1. import the model created to our controller
2. Import in the server main file a middleware to parse de req.body below our initiation of app express()

- Creating the 'C' from CRUD:
    1. We'll need to get data from the request body of the client
        - configure in postman a header preset for json content-type
    2. to insert that data we'll use our Model's create method passing as a parameter our request body (as a promise)
    3. send a response for the request
    4. the database we'll be created after the request

## **Configuring personalized colors in our terminal msgs**

1. install package: ```npm i colors```
2. import colors on top of main server file
    - or create a dif file on config with your theme and import it on mais server file
3. use it on your console.logs

- on this we'll using cyan for our environments logs and magenta for db logs