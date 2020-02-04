# swagger-app-mw

Implementacion generica de swagger-express-mw para administrar multiples apps con yaml


### Installation

Requires [Node.js](https://nodejs.org/) v10+ to run. Install the dependencies.

```sh
$ npm install --save https://github.com/nahuelm/swagger-app-mw
```

### Usage

```node
var config = {
    appRoot: __dirname,
};

var routePath = '/api/v1';

var swaggers = [
    "./api/swagger/v1/hello_v1.yaml", 
    "./api/swagger/v1/bye_v1.yaml"
];

app.use(routePath, appService.generateSwaggerApp(config, swaggers));
```
