import User from './user.model';
import { IUser } from './user.interface';
import { Types } from 'mongoose';

// Create User
export const createUserService = async (userData: IUser) => {
  try {
    const user = new User(userData);
    await user.save();
    return user;
  } catch (error) {
    throw new Error(`Failed to create user: ${error.message}`);
  }
};

// Get User by ID
export const getUserById = async (userId: string) => {
  try {
    if (!Types.ObjectId.isValid(userId)) {
      throw new Error('Invalid user ID');
    }
    const user = await User.findById(userId).exec();
    return user;
  } catch (error) {
    throw new Error(`Failed to get user by ID: ${error.message}`);
  }
};

// Update User
export const updateUser = async (userId: string, updateData: Partial<IUser>) => {
  try {
    if (!Types.ObjectId.isValid(userId)) {
      throw new Error('Invalid user ID');
    }
    const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true }).exec();
    return updatedUser;
  } catch (error) {
    throw new Error(`Failed to update user: ${error.message}`);
  }
};

// Delete User
export const deleteUser = async (userId: string) => {
  try {
    if (!Types.ObjectId.isValid(userId)) {
      throw new Error('Invalid user ID');
    }
    const deletedUser = await User.findByIdAndDelete(userId).exec();
    return deletedUser;
  } catch (error) {
    throw new Error(`Failed to delete user: ${error.message}`);
  }
};
