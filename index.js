//import the express library and assign it to a variable
import express from 'express'

//Create an instance of an express applicaiton
const app = express();

//Set the port the application will run on
const port = process.env.PORT || 3001

//Set up response for the root path of the application；getting request elsewhere
app.get('/', (req,res) => {
    res.send("Draw a plant")
})

//Set up the application to listen on the specified port
app.listen(port, () => {
    console.log(`Example app Listening on port ${port}`)
})