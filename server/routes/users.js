import express from 'express'
import {login,signup} from '/Users/sujiths/vscodeprojects/Stack Overflow/server/controllers/auth.js'
import {getAllUsers,updateProfile} from '/Users/sujiths/vscodeprojects/Stack Overflow/server/controllers/users.js'
import auth from '/Users/sujiths/vscodeprojects/Stack Overflow/server/middlewares/auth.js'



const router=express.Router();

router.post('/signup',signup)
router.post('/login',login)

router.get('/getAllUsers',getAllUsers)
router.patch('/update/:id',auth,updateProfile)

export default router