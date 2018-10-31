import express from "express"
import router from './controllers/router'
import frontFilter from './middleware/frontFilter'
import startUps from './utils/startUps'

//create instance
const app = express();

app.use(frontFilter) //frontFilter
app.use('/api', router) //directing to global router(dispatcher)

//listen oon 8080
app.listen(8080, () => console.log("Listening on portt 8080    !"));
