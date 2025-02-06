import mongoose, { Document, ObjectId } from 'mongoose';

type ScheduleItem = {
    [key: number]: Number[]; // The key is a number, and the value is an array of numbers
};

export interface IUser extends Document {
    name: string;
    email: string;
    password: string; // Add the password field
    role: 'member';
    availability?: {
        default: {
            "Saturday": Number[],
            "Sunday": Number[],
            "Monday": Number[],
            "Tuesday": Number[],
            "Wednesday": Number[],
            "Thursday": Number[],
            "Friday": Number[],
        },
        exception: ScheduleItem[],
    }[];
    enrolledCourses: mongoose.Types.ObjectId[];
    createdAt: Date;
    updatedAt: Date;
}
