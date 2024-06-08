import { app } from './app.js'
import connectDB from './Database/db.js'
import 'dotenv/config'
const port = process.env.PORT || 5000

connectDB()
.then(() => {
    app.on("error", (error) => {
        console.log("Caught error: ",error);
        throw error
    })
    app.listen(port, ()=> {
        console.log(`Running on ${port}`);
    })
})
.catch((error) => {
    console.log(`Error while running server on port: ${port}`)
})
