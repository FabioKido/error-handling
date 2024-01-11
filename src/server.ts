import express, {Request, Response, NextFunction} from 'express'

const app = express()
app.use(express.json())

app.listen(3000, function() {
    console.log('server started...')
})