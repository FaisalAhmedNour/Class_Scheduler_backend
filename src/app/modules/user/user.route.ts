
import * as UserController from './user.controller';
import { Router } from "express";

const router = Router();
// Create User
router.post('/users', UserController.createUser);

// Get User by ID
router.get('/users/:id', UserController.getUserById);

// Update User
router.put('/users/:id', UserController.updateUser);

// Delete User
router.delete('/users/:id', UserController.deleteUser);



export const userRoutes = router;