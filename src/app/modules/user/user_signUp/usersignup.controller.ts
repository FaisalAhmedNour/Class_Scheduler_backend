import { Request, Response } from 'express';
import { createUserService } from './usersignup.service';

interface signupRequest extends Request {
    name: string,
    email: string,
    password: string,
    role: string
}

// Controller to create a new user
export const createUser = async (req: Request, res: Response) => {
    console.log(req.body)
    const { name, email, password, role } = req.body;

    try {
        // Create the user with the provided data
        const newUser = await createUserService({
            name,
            email,
            password,
            role,
        });

        // Return the created user as a response
        return res.status(200).json({
            message: 'User created successfully',
            user: newUser,
        });
    } catch (error) {
        // Handle errors
        console.error(error);
        return res.status(500).json({
            message: 'Error creating user',
            error: error.message,
        });
    }
};

export const userSignupController = {
    createUser,
};