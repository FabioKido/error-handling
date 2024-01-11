import { Router } from 'express'
import { file, name } from '../controllers/controller'

const router = Router()

router.post('/name', name)

router.get('/file', file)

export default router