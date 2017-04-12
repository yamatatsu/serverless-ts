"use strict";
var _ = require("lodash");
exports.hello = function (event, context, callback) {
    if (ipFilter(event, callback)) {
        return;
    }
    callback(undefined, {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Go Serverless v1.0! Your function executed successfully!',
            input: { event: event },
        }),
    });
};
function ipFilter(event, callback) {
    var permittedIps = process.env.PERMITTED_IPS;
    if (permittedIps === 'any') {
        return false;
    }
    if (!_.includes(permittedIps.split(','), event.requestContext.identity.sourceIp)) {
        callback(undefined, { statusCode: 503 });
        return true;
    }
}
