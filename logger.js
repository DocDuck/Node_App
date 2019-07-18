module.exports = function(module) {

    return function(...args) {
        const log = `${module.filename} ${args}`;
        console.log(log);
    };

};