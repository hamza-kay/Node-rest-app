# Serverless REST API with Node JS

Restful app that was initially created to run locally went serverless by migrating it to AWS Lambda.

## Installation
- git clone https://github.com/hamza-kay/Node-rest-app.git
- cd node-rest-app
- npm install
- npm start
- optional: include .env in your .gitignore


## Features

- Express
- Serverless-http
- Mongodb
- AWS Lambda


## Routes

- Visit https://8wbqa5qh84.execute-api.us-east-1.amazonaws.com/dev/

  - POST /users
  - GET /users
  - GET /users/:id
  - DELETE /users/:id
  - PUT /users/:id

## CURL

- Create new user:
   - ```curl -XPOST -H "Content-type: application/json" -d '{"name":"smith", "email":"test@test.com", "password":"test" }' 'https://8wbqa5qh84.execute-api.us-east-1.amazonaws.com/dev/users'```

- Get all users:
   - ```curl -XGET 'https://8wbqa5qh84.execute-api.us-east-1.amazonaws.com/dev/users'```

- Get a user using id:
   - ```curl -XGET 'https://8wbqa5qh84.execute-api.us-east-1.amazonaws.com/dev/users/{id}'```

- Delete a user using id:
   - ```curl -XDELETE 'https://8wbqa5qh84.execute-api.us-east-1.amazonaws.com/dev/users/{id}'```

- Update a user using id:
   - ```curl -XPUT -H "Content-type: application/json" -d '{"name": "test", "email": "test@gmail.com","password": "testing"}' 'https://8wbqa5qh84.execute-api.us-east-1.amazonaws.com/dev/users/{id}'```

## Data Structure

    { 
        "name": "test",
        "email": "test@test.com,
        "password": "test123" 
    }




