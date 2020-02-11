var SwaggerExpress = require('swagger-express-mw');
const express = require('express');

module.exports = {
    configurateSwaggerApps: configurateSwaggerApps
}

function generateSwaggerApp(config, swaggerApp) {
    const app = express();

    swaggerApp.swaggers.forEach(swaggerFile => {
        config.swaggerFile = swaggerFile;

        SwaggerExpress.create(config, function(err, swaggerExpress) {
            if (err) { throw err; }
            swaggerExpress.register(app);
            if (config.logPaths) {
                var jsonData = swaggerExpress.runner.swagger.paths;
                Object.keys(jsonData).forEach(function(key) {
                    var toLog = {}
                    if (swaggerExpress.runner.swagger.basePath === '/' && swaggerApp.basePath === '/') {
                        toLog[key] = jsonData[key];
                    } else if (swaggerExpress.runner.swagger.basePath === '/') {
                        toLog[swaggerApp.basePath + key] = jsonData[key];
                    } else if (swaggerApp.basePath === '/') {
                        toLog[swaggerExpress.runner.swagger.basePath + key] = jsonData[key];
                    } else {
                        toLog[swaggerApp.basePath + swaggerExpress.runner.swagger.basePath + key] = jsonData[key];
                    }
                    console.log(toLog);
                });
            }

        });
    });
    return app;
}

function configurateSwaggerApps(config, app, swaggerApps) {
    swaggerApps.forEach(swaggerApp => {
        app.use(swaggerApp.basePath, generateSwaggerApp(config, swaggerApp))
    });
}