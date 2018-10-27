import { Router } from 'express';
const router = Router()

router.get('/:id', (req, res) => {
    console.log('resources id is called')
    res.send({ "status": "ok" })
})


router.get('/', (req, res) => {
    console.log('GET RESOURCE IS CALLED')
    res.send({ "status": "ok" })
})

router.post('/', (req, res) => {
    console.log('POST RESOURCE IS CALLED')
    res.send({ "status": "ok" })
})

export default router