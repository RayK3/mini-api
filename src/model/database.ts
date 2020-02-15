import { User, Admin, Group} from '../type';
import { admins } from './admin';
import { groups } from './group';
import { users } from './user';

// Holds and allows access to users, admins, and groups. It is a Singleton
export class Database {
    // instance of Database
    private static instance = new Database();
    
    // data storage
    private static admins: Admin[] = admins;
    private static groups: Group[] = groups;
    private static users: User[] = users;

    // specifies that constructor is private
    private Database () {}

    // to retrieve the instance of the database
    public static getInstance() { return this.instance };
}
