import { Request, Response } from 'express';
import { Database } from '../model';
import { Endpoint, Error, validateUser } from '../type';

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
            res.json({ reason: 'No user exists with given id' } as Error);
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

export const updateUser: Endpoint = {
    path: '/user/:id',
    method: 'put',
    handler: (req: Request, res: Response) => {
        const db = Database.getInstance();

        // grabbing the user id from the path
        const { params: { id } } = req;
        const user = req.body;

        const bodyIsValid = validateUser(user);

        if (bodyIsValid) {
            const userReplaced = db.replaceUser(user);
            if (userReplaced) {
                res.status(204);
                res.end();
            } else {
                res.status(404);
                res.json({ reason: 'No user exists with given id' } as Error)
            }
        } else {
            res.status(400);
            res.json({ reason: 'Body does not contain a valid user' } as Error);
        }
    }
}
