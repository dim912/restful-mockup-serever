import { Router } from 'express';
import ResourceController from './controllers/ResourceController'
import HomeController from './controllers/HomeController'
import CollectionsController from './controllers/CollectionsController'

const router = Router()

router.use('/resources', ResourceController)
router.use('/collections', CollectionsController)


//index url
router.use('/', HomeController)


export default router