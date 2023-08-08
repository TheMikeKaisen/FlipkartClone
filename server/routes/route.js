import express from 'express';
import { userSignup, userLogin } from '../controller/user-controller.js';


const Router = express.Router();



Router.post('/signup',userSignup);
Router.post('/login', userLogin);

export default Router;