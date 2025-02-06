import mongoose, { Schema, Document, Types } from 'mongoose';
import { IUser } from './user.interface'; // Assuming the IUser interface is in a file named user.interface.ts

// Define the ScheduleItem type
type ScheduleItem = {
    [key: number]: Types.ObjectId[]; // The key is a number, and the value is an array of ObjectIds
};

// Define the availability schema for the user
const availabilitySchema = new Schema(
    {
        default: [
            { Saturday: { type: [String], default: [] } },
            { Sunday: { type: [String], default: [] } },
            { Monday: { type: [String], default: [] } },
            { Tuesday: { type: [String], default: [] } },
            { Wednesday: { type: [String], default: [] } },
            { Thursday: { type: [String], default: [] } },
            { Friday: { type: [String], default: [] } },
        ],
        exception: [
            {
                type: Map,
                of: [Types.ObjectId],
            },
        ],
    },
    { _id: false } // No automatic _id generation for sub-documents
);

// Define the User schema
const userSchema = new Schema<IUser>(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true }, // Add password field
        role: { type: String, required: true, enum: ['member'] },
        availability: { type: [availabilitySchema] },
        enrolledCourses: { type: [Types.ObjectId], ref: 'Course', default: [] },
    },
    { timestamps: true }
);

// Create the User model
const User = mongoose.model<IUser>('User', userSchema);

export default User;
