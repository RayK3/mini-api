import { Request, Response } from 'express';

export interface Endpoint {
    path: string;
    method: 'get' | 'post' | 'delete' | 'put';
    handler: (req: Request, res: Response) => void;
}
