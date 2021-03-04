# Serverless REST API with Node JS

Restful app that was initially created to run locally but went serverless by migrating it to AWS Lambda.

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

- Create new user with:
   - ```curl -XPOST -H "Content-type: application/json" -d '{"name":"smith", "email":"test@test.com", "password":"test" }' 'https://8wbqa5qh84.execute-api.us-east-1.amazonaws.com/dev/users'```

- Get all users with:
   - ```curl -XGET 'https://8wbqa5qh84.execute-api.us-east-1.amazonaws.com/dev/users'```

- Get a user using id of the user with :
   - ```curl -XGET 'https://8wbqa5qh84.execute-api.us-east-1.amazonaws.com/dev/users/(user id goes here)'```

 Delete a user using id of the user with :
   - ```curl -XDELETE 'https://8wbqa5qh84.execute-api.us-east-1.amazonaws.com/dev/users/(user id goes here'```

Update a user using id of the user with :
   - ```curl -XPUT -H "Content-type: application/json" -d '{"name": "test", "email": "test@gmail.com","password": "testing"}' 'https://8wbqa5qh84.execute-api.us-east-1.amazonaws.com/dev/users/603bf63503fa3400089eebfa'```


