import { Router } from 'express';
import { userSignupController } from './usersignup.controller';


const router = Router();

// Route to create a new user
router.post('/signup', userSignupController.createUser);

export const userSignupRoutes = router;