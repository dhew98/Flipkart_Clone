import express from 'express'
import { usersignup } from '../controller/usercontroller.js'
import { userlogin } from '../controller/usercontroller.js'
import { getProducts, getProductById } from '../controller/productsController.js'
const router = express.Router()

router.post('/signup', usersignup)

router.post('/login', userlogin)

router.get('/products', getProducts);
router.get('/product/:id', getProductById)


export default router

