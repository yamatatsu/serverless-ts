"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = function (event, context, callback) {
    var response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Go Serverless v1.0! Your function executed successfully!',
            input: event,
        }),
    };
    callback(undefined, response);
};
