import express from "express"
import router from './controllers/router'
import frontFilter from './middleware/frontFilter'
import startUps from './utils/startUps'
import path from 'path'

const htmlPath = path.join(__dirname, 'public');

//create instance
const app = express();

app.use(express.static(htmlPath)) //static route

app.use(frontFilter) //frontFilter
app.use('/api', router) //directing to global router(dispatcher)

//listen oon 8080
app.listen(8080, () => console.log("Listening onn portt 8080    !"));
