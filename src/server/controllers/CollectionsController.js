import { Router } from 'express';
import db from '../utils/db'
const router = Router()

router.get('/', (req, res) => {

    let collection = db.getCollection('collections')
    let cont = collection.find({})

    res.send(cont)
})

export default router