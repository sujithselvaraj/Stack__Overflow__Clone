import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import userRoutes from '/Users/sujiths/vscodeprojects/Stack Overflow/server/routes/users.js'
import questionRoutes from '/Users/sujiths/vscodeprojects/Stack Overflow/server/routes/Questions.js'
import answerRoutes from '/Users/sujiths/vscodeprojects/Stack Overflow/server/routes/Answers.js'
import dotenv from 'dotenv'

const app = express();
dotenv.config();
app.use(express.json({limit:"30mb",extended: true}))
app.use(express.urlencoded({limit:"30mb",extended: true}))
app.use(cors());


app.get('/',(req,res) => {
    res.send("This is a StackOverflow clone API")
})
app.use('/user',userRoutes)
app.use('/questions',questionRoutes)
app.use('/answer',answerRoutes)


const PORT = process.env.PORT || 5001
const DATABASE_URL=process.env.CONNECTION_URL

mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)}))
        .catch((err) => console.log(err.message))