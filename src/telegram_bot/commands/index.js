const fs = require('fs');

fs
    .readdirSync(__dirname)
    .filter(file => file != "index.js")
    .map(file => {
        let command = require(`./${file}`)
        module.exports[command.name] = command
    })