// pb_hooks/main.pb.js

// intercept requests
onRecordAfterUpdateRequest((e) => {
    console.log(e.record.id)
})

// intercept system emails
// onMailerBeforeRecordVerificationSend((e) => {
//     // send custom email
//     e.mailClient.send(...)

//     // stops propagation
//     return false
// })

// register custom routes
routerAdd(
    "get",
    "/hello",
    (c) => {
        return c.string(200, "Hello!")
    },
    $apis.activityLogger($app),
    $apis.requireAdminAuth()
)

// jobs scheduling
cronAdd("hello", "*/2 * * * *", () => {
    // prints "Hello!" every 2 minutes
    console.log("Hello!")
})