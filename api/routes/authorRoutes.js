import { Router } from 'mongoose'
import communityRouter from './communityRoutes.js'
const authorRouter = Router()

authorRouter.use('/:authorId/community', communityRouter)

export default authorRouter