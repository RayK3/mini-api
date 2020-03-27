import { Database } from '../../src/model/database';

let db: Database;

beforeAll(() => {
    db = new Database();
})

test('retrieves user with id: 1', () => {
    expect(db.getUserById('1')!.name).toBe('John Smith');
});

test('retrieves all users', () => {
    expect(db.getUsers().length).toBe(5);
});

test('retrieves James\' Group', () => {
    expect(db.getGroupByName('James\' Group')!.name).toBe('James\' Group');
});
