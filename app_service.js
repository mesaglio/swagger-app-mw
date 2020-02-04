var SwaggerExpress = require('swagger-express-mw');
const express = require('express');

module.exports = {
    generateSwaggerApp: generateSwaggerApp
}

function generateSwaggerApp(config, swaggersFiles) {
    const app = express();

    swaggersFiles.forEach(swaggerFile => {
        config.swaggerFile = swaggerFile;
        SwaggerExpress.create(config, function (err, swaggerExpress) {
            if (err) { throw err; }
            swaggerExpress.register(app);
        });
    });

    return app;
}