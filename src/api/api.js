module.exports.handler = (event, ctx, done) => {
    console.log(`customer is ${event.pathParameters.customer}`);
    done(null, {
        statusCode: 200,
        body: JSON.stringify({
            data: {
                id: 1, name: '1 clean up', status: 'open'
            }
        })
    })
}
