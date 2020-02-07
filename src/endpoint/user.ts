import { Request, Response } from 'express';

export const getUser = (req: Request, res: Response) => {
    res.status(200);
    res.json({
        id: '6aa60d58-a9b1-41fb-b5fa-ccbe1873431c',
        name: 'John Smith',
        age: 45,
        email: 'johnsmith@gmail.ca',
    });
}
