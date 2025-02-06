import { Request, Response } from 'express';
import * as UserService from './user.service';

// Create User

interface Isignup extends Request {
    name: string,
    email: string,
    password: string,
    role: string

}
export const createUser = async (req: any, res: Response) => {
    try {
        console.log(req.body);
        const user = await UserService.createUserService(req.body);
        res.status(201).json({
            message: 'User created successfully',
            user,
        });
    } catch (error) {
        console.error(error);
        res.status(400).json({
            error: 'Failed to create user',
            // details: error.message,
        });
    }
};

// Get User by ID
export const getUserById = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;
        const user = await UserService.getUserById(userId);
        if (user) {
            res.status(200).json({
                message: 'User fetched successfully',
                user,
            });
        } else {
            res.status(404).json({
                error: 'User not found',
                details: `No user found with ID ${userId}`,
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Error fetching user',
            // details: error.message,
        });
    }
};

// Update User
export const updateUser = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;
        const updatedUser = await UserService.updateUser(userId, req.body);
        if (updatedUser) {
            res.status(200).json({
                message: 'User updated successfully',
                updatedUser,
            });
        } else {
            res.status(404).json({
                error: 'User not found',
                details: `No user found with ID ${userId}`,
            });
        }
    } catch (error) {
        console.error(error);
        res.status(400).json({
            error: 'Failed to update user',
            // details: error.message,
        });
    }
};

// Delete User
export const deleteUser = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;
        const deletedUser = await UserService.deleteUser(userId);
        if (deletedUser) {
            res.status(200).json({
                message: 'User deleted successfully',
                deletedUser,
            });
        } else {
            res.status(404).json({
                error: 'User not found',
                details: `No user found with ID ${userId}`,
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Error deleting user',
            // details: error.message,
        });
    }
};
