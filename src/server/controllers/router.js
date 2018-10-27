import { Router } from 'express';
import ResourceController from './ResourceController'

const router = Router()

router.use('/resources', ResourceController)

//index url
router.get('/', (req, res) => {
    res.send({ "payload": "homepage" });
})

export default router