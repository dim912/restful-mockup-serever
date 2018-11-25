import { Router } from 'express';
const router = Router()

router.use('/', (req, res) => {
    res.send({ "status": "ok" })
})

export default router