import mongoose, { Schema, Document } from 'mongoose';
import { IUserSignup } from './userSignup.interface';


// Define the UserSignup schema
const userSignupSchema = new Schema<IUserSignup>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ['member'], default: 'member' },
}, { timestamps: true });

// Create the UserSignup model
const UserSignupModel = mongoose.model<IUserSignup>('Users', userSignupSchema);;

export default UserSignupModel;
