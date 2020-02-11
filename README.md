# swagger-app-mw

Implementacion generica de swagger-express-mw para administrar multiples apps con yaml


### Installation

Requires [Node.js](https://nodejs.org/) v10+ to run. Install the dependencies.

```sh
$ npm install --save https://github.com/nahuelm/swagger-app-mw
```

### Usage

```node
const app = express();

var config = {
    appRoot: __dirname,
    logPaths: true
};

var swaggerApps = [
    {
        basePath: '/api/v1',
        swaggers: ["./api/swagger/v1/hello_v1.yaml", "./api/swagger/v1/bye_v1.yaml"]
    },
    {
        basePath: '/api/v2',
        swaggers: ["./api/swagger/v2/hello_v2.yaml"]
    }
];

appService.configurateSwaggerApps(config, app, swaggerApps);

const port = 10010;

app.listen(port, function(){
    console.log("Server is running on " + port + " port");
});
```
