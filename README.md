# mini-api

Typescript API for use with an Azure Devops CI/CD build pipeline

## Setting up

Make sure that node is installed on your computer, and typescript is installed as a global dependency via: ```npm install -g typescript```. Then run `npm install` to update node_modules.

### Building the project
To build the project, run: `npm run build` or simply `tsc` if typescript was installed globally.

### Starting the project
To start the API, run: `npm start`  

Then the API should be available at http://localhost:3000, with an available endpoint located at http://localhost:3000/users

## Viewing endpoints
To view endpoints, it is recommended to copy and paste the API specification file [mini-api.yaml](mini-api.yaml) to the online editor at https://editor.swagger.io. There, you can view all endpoint parameters and return values. The editor can also send requests to the API using curl in order to test functionality.
