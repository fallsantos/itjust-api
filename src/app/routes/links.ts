import { Router } from 'express'

import LinksController from '../controllers/LinksController'

const router = Router()

router.post('/', LinksController.postLink)

router.get('/:code', LinksController.hitLink)

router.get('/:code/status', LinksController.getLink)

export default router
