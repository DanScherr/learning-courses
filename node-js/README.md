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