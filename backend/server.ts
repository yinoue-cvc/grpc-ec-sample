import express from "express"
const app = express()

app.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.send('Hello, world!')
    next();
})

app.listen(8081, () => {
    console.log("Start on port 3000.")
})