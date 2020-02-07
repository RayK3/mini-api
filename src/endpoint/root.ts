import { Request, Response } from 'express';

export const rootEndpoint = (req: Request, res: Response) => {
    res.status(403);
    res.end();
}
