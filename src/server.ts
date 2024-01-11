import 'express-async-errors'
import express from 'express'
import router from './infra/api/routes'
import { errorMiddleware } from './infra/api/middlewares/errorMiddleware'

const app = express()
app.use(express.json())
app.use(router)
app.use(errorMiddleware)

app.listen(3000, function() {
    console.log('server started...')
})