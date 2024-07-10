import { Router } from 'mongoose'
import communityRouter from './communityRoutes.js'
const authorRouter = Router()

authorRouter.use('/:authorId/communitys', communityRouter)

export default authorRouter