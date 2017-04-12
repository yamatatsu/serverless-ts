import * as lambda from 'aws-lambda'
import * as _ from 'lodash'

export const hello = (event: lambda.APIGatewayEvent, context: lambda.Context, callback: lambda.Callback) => {
  if (ipFilter(event, callback)) {
    return
  }

  callback(undefined, {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: { event },
    }),
  })
}

function ipFilter(event, callback) {
  const permittedIps = process.env.PERMITTED_IPS
  if (permittedIps === 'any') {
    return false
  }

  if (!_.includes(permittedIps.split(','), event.requestContext.identity.sourceIp)) {
    callback(undefined, { statusCode: 503 })
    return true
  }
}
