import express from 'express'

import {postAnswer,deleteAnswer} from '/Users/sujiths/vscodeprojects/Stack Overflow/server/controllers/Answers.js'
import auth from '/Users/sujiths/vscodeprojects/Stack Overflow/server/middlewares/auth.js'


const router=express.Router();

router.patch('/post/:id',auth,postAnswer)
router.patch('/delete/:id',auth,deleteAnswer)


export default router