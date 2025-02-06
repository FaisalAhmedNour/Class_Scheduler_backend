import mongoose from 'mongoose';

export interface IUserSignup {
    name: string;
    email: string;
    password: string;
    role: 'member'; // Role is fixed to 'member'
}