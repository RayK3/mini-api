import { Request, Response } from 'express';
import { Database } from '../model';
import { Endpoint } from '../type';

export const getUserById: Endpoint = {
    path: '/user/:id',
    method: 'get',
    handler: (req: Request, res: Response) => {
        const db = Database.getInstance();

        // grabbing the user id from the path
        const { params: { id } } = req;

        const user = db.getUserById(id);

        if (user) {
            res.status(200);
            res.json(user);
        } else {
            res.status(404);
            res.end();
        }
    },
}

export const getUsers: Endpoint = {
    path: '/users',
    method: 'get',
    handler: (req: Request, res: Response) => {
        const db = Database.getInstance();

        const users = db.getUsers();

        res.status(200);
        res.json(users);
    }
}
