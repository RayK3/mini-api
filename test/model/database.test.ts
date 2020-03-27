import { Database } from '../../src/model/database';

test('retrieves user with id: 1', () => {
    const db = new Database();
    expect(db.getUserById('1')!.name).toBe('John Smith');
});
