import uuidv4 from 'uuid/v4';
import { User } from '../type';

// holds definitions for 5 users that will be used to populate a database
export const users: User[] = [
    {
        id: uuidv4(),
        name: 'John Smith',
        age: 20,
        email: 'johnsmith@gmail.com',
        groupId: null,
    },
    {
        id: uuidv4(),
        name: 'Adam Anderson',
        age: 30,
        email: 'adamanderson@gmail.com',
        groupId: null,
    },
    {
        id: uuidv4(),
        name: 'Ben Solo',
        age: 27,
        email: 'bensolo@gmail.com',
        groupId: null,
    },
    {
        id: uuidv4(),
        name: 'Kylo Ren',
        age: 28,
        email: 'kyloren@gmail.com',
        groupId: null,
    },
    {
        id: uuidv4(),
        name: 'Adam Driver',
        age: 29,
        email: 'adamdriver@gmail.com',
        groupId: null,
    },
]
