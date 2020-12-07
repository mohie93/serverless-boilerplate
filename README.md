# Serverless Rest API with ApiGateway, lambda, and dynamoDB, using NodeJs and ExpressJS

### How to run the app locally:

- Install `nodeJs, npm, and serverless` on your machine
- Clone the app into your machine
- `CD` to the app directory
- Create `.env` file with these variables:
  - NODE_ENV
  - ROLE
  - ACCESS_KEY_ID
  - SECRET_ACCESS_KEY
  - REGION
  - SERVERLESS_PROFILE
  - SERVERLESS_TIMEOUT
  - SERVERLESS_MEMORY
- Run command `yarn install`
- Run command `serverless dynamodb install` to install in memory dynamodb for local test
- Run command `yarn offline` to run the app locally

### Deploy:

- Run command `yarn deploy` to deploy the app to your AWS infrastructure, make sure you set correct `.env` credentials.
