import uuidv4 from 'uuid/v4';
import { Admin } from '../type';

// holds definitions for 5 users that will be used to populate a database
export const admins: Admin[] = [
    {
        id: uuidv4(),
        name: 'James Potter',
        age: 45,
        email: 'jamespotter@gmail.com',
        groupId: null,
        title: 'The Big Cheese',
    },
    {
        id: uuidv4(),
        name: 'Lilly Potter',
        age: 44,
        email: 'lillypotter@gmail.com',
        groupId: null,
        title: 'CEO'
    },
]
