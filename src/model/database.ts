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

    // CRUD operations for users, admins, groups

    // get a user by id
    public getUserById(id: string): User | undefined {
        const user = users.find((user: User) => user.id === id);
        return user;
    }

    // get all users
    public getUsers(): User[] {
        return users;
    }

    // add a user
    public addUser(user: User): User {
        users.push(user);
        return user;
    }

    public replaceUs er(updatedUser: User): boolean {
        // remove the user with the same id
        const isDeleted = this.deleteUser(updatedUser.id);

        // if the user with the id existed, we can update them
        if (isDeleted) {
            // add back the updated user
            this.addUser(updatedUser);
            return true;
        } else {
            // if we couldn't find the user, the update fails
            return false;
        }

    }

    public deleteUser(id: string): boolean {
        const index: number = users.findIndex((user: User) => user.id === id);

        // if the user with that id is found, delete, them
        if (index >= 0) {
            users.splice(users.findIndex((user: User) => user.id === id), 1);
            return true;
        } else {
            return false;
        }

    }

    public getGroupByName(name: String): Group | undefined {
        return groups.find((group) => (group.name == name));
    }
}
