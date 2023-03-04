
// Requiring module
const express = require("express")
const app = express()
  
// Handling GET /hello request
app.get("/hello", (req, res, next) => {
    res.send("This is the hello response");
})
  
// Handling non matching request from the client
app.use((req, res, next) => {
    res.status(404).send(
        "<h1>Page not found on the server</h1>")
})
  
// Server setup
app.listen(3000, () => {
    console.log("Server is Running")
})