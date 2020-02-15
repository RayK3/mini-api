import uuidv4 from 'uuid/v4';
import { Group } from '../type';

// holds definitions for 5 users that will be used to populate a database
export const groups: Group[] = [
    {
        id: uuidv4(),
        name: 'James\' Group',
        adminId: null,
    },
    {
        id: uuidv4(),
        name: 'Lilly Potter Incorporated',
        adminId: null,
    },
]
