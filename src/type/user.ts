import { emailRegEx, guidRegEx } from './regex';

export interface User {
    id: string,
    name: string,
    age: number,
    email: string,
    groupId: string | null,
}

export const validateUser = (user: User): boolean => {
    let valid: boolean = false;

    // make sure that the user id is a guid
    if (!guidRegEx.test(user.id)) {
        valid = false;
    }

    // make sure the name is a string with length greater than zero
    if (typeof user.name !== 'string' || user.name.length === 0) {
        valid = false;
    }

    // make sure age is a number greater than zero, less than 120
    if (typeof user.age !== 'number' || user.age <= 0 || user.age >= 120) {
        valid = false;
    }

    // make sure email is a valid email address
    if (!emailRegEx.test(user.email)) {
        valid = false;
    }

    // validate groupId if it exists
    if (user.groupId) {
        if (!guidRegEx.test(user.groupId)) {
            valid = false;
        }
    }

    return valid;
}
