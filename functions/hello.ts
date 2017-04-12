import * as lambda from 'aws-lambda'

export const hello = (event: lambda.APIGatewayEvent, context: lambda.Context, callback: lambda.Callback) => {
  callback(undefined, {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: { event },
    }),
  })
}
