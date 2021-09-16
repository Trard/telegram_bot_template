const fs = require("fs");

fs
    .readdirSync(__dirname)
    .filter((file) => file != "index.js")
    .map((file) => {
        let middleware = require(`./${file}`);
        module.exports[middleware.name] = middleware;
    });
