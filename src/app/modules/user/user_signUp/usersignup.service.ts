import UserSignupModel from './userSignup.model';
import { IUserSignup } from './userSignup.interface';

// Service to create a new user
export const createUserService = async (user: IUserSignup) => {
    const result = await UserSignupModel.create(user);
    return result;
};

// Export the service
// export const userSignupService = {
//   createUser,
// };
