import { Router } from 'express';
import bodyParser from 'body-parser'
import db from '../utils/db'
const router = Router()

router.get('/:id', (req, res) => {
    console.log('resources id is called')
    res.send({ "statusaaddd": "ok" })
})

router.get('/', (req, res) => {
    console.log('GET RESOURCE IS CALLED')
    res.send({ "status": "ok" })
})

router.post('/', bodyParser.json(), (req, res) => {
    db.addCollection("entries")
    let entries = db.getCollection("entries")
    entries.insert(req.body)
    db.save
    console.log(entries.find({ 'name': 'dimuthu' }))

    var users = db.addCollection("users");

    users.insert({ name: 'odin', age: 50 });
    users.insert({ name: 'thor', age: 35 });

    var result = users.find({ age: { $lte: 35 } });

    console.log(result);

    res.send({ "status": "ok" })
})

export default router